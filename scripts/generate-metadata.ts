import { withCustomConfig } from "react-docgen-typescript";
import { writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { globSync } from "glob";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const parser = withCustomConfig(resolve(root, "tsconfig-build.json"), {
  savePropValueAsString: true,
  shouldExtractLiteralValuesFromEnum: true,
  shouldRemoveUndefinedFromOptional: true,
  // Skip native HTML props inherited from React — only keep our custom ones
  propFilter: (prop) => {
    if (prop.parent) {
      return !prop.parent.fileName.includes("node_modules");
    }
    return true;
  },
});

const files = globSync("lib/components/*/index.tsx", { cwd: root, absolute: true });

const components = files.flatMap((file) => {
  const parsed = parser.parse(file);
  return parsed.map((component) => ({
    name: component.displayName,
    description: component.description,
    importPath: "@alexcruzgargallo/ui-react",
    props: Object.entries(component.props).map(([name, prop]) => ({
      name,
      type: prop.type.name,
      default: prop.defaultValue?.value ?? undefined,
      required: prop.required,
      description: prop.description || undefined,
    })),
  }));
});

const outDir = resolve(root, "lib/metadata");
mkdirSync(outDir, { recursive: true });

const outPath = resolve(outDir, "components.json");
writeFileSync(outPath, JSON.stringify({ library: "@alexcruzgargallo/ui-react", components }, null, 2));

console.log(`Generated metadata for ${components.length} components → lib/metadata/components.json`);
