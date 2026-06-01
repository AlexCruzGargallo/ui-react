# @alexcruzgargallo/ui-react

A lightweight React component library built with TypeScript, Vite, and CSS Modules. Ships as a fully-typed ES module with scoped styles injected automatically.

## Installation

```bash
npm install @alexcruzgargallo/ui-react
```

> **Peer dependencies:** React 19+ must be installed in your project.

## Usage

```tsx
import { Button, Input, Badge, Card, Spinner, Checkbox } from "@alexcruzgargallo/ui-react";

export default function Example() {
  return (
    <Card>
      <Badge variant="success">Active</Badge>
      <Input label="Email" helperText="We'll never share your email." />
      <Checkbox label="Accept terms" />
      <Button variant="primary" size="medium">Submit</Button>
    </Card>
  );
}
```

## Components

### `Button`

```tsx
<Button variant="primary" size="medium" loading={false}>Click me</Button>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"primary" \| "secondary" \| "danger" \| "ghost"` | `"primary"` | Visual style |
| `size` | `"small" \| "medium" \| "large"` | `"medium"` | Size |
| `loading` | `boolean` | `false` | Shows a spinner and disables the button |

Extends all native `<button>` HTML attributes.

---

### `Input`

```tsx
<Input label="Username" error="Required" helperText="3–20 characters" size="medium" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Label displayed above the input |
| `error` | `string` | — | Error message; also sets `aria-invalid` |
| `helperText` | `string` | — | Helper text shown when there is no error |
| `size` | `"small" \| "medium" \| "large"` | `"medium"` | Size of the input field |

Extends all native `<input>` HTML attributes (except `size`).

---

### `Badge`

```tsx
<Badge variant="success" size="small">New</Badge>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"primary" \| "secondary" \| "success" \| "warning" \| "danger"` | `"primary"` | Color variant |
| `size` | `"small" \| "medium"` | `"medium"` | Size |

Extends all native `<span>` HTML attributes.

---

### `Card`

```tsx
<Card padding="medium" shadow>Content</Card>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `padding` | `"none" \| "small" \| "medium" \| "large"` | `"medium"` | Internal padding |
| `shadow` | `boolean` | `true` | Whether to show a subtle drop shadow |

Extends all native `<div>` HTML attributes.

---

### `Spinner`

```tsx
<Spinner size="medium" color="primary" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `"small" \| "medium" \| "large"` | `"medium"` | Size |
| `color` | `"primary" \| "white" \| "gray"` | `"primary"` | Color; use `"white"` on dark backgrounds |

Renders a `<span role="status" aria-label="Loading">`. Extends all native `<span>` HTML attributes.

---

### `Checkbox`

```tsx
<Checkbox label="Accept terms" error="Required" size="medium" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Label text displayed next to the checkbox |
| `error` | `string` | — | Error message; also sets `aria-invalid` |
| `size` | `"small" \| "medium" \| "large"` | `"medium"` | Size of the checkbox and label |

Extends all native `<input>` HTML attributes (except `size`).

---

## Development

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Compile TypeScript and build the library |
| `npm run generate-metadata` | Generate component metadata from source |
| `npm run lint` | Run ESLint |
| `npm run storybook` | Start Storybook on port 6006 |
| `npm run build-storybook` | Build Storybook static output |

### Project structure

```
lib/
  main.ts               # Library entry point
  components/
    Button/
    Input/
    Badge/
    Card/
    Spinner/
    Checkbox/
scripts/
  generate-metadata.ts  # Generates lib/metadata/components.json
```

### Build output

The library is compiled to ES modules (`dist/`) with full TypeScript declaration files. CSS Modules are injected into the JS bundle via `vite-plugin-lib-inject-css`, so consumers don't need to import any CSS separately.

## License

MIT — Alex Cruz Gargallo
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
