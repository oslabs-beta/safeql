export type SchemaDisplayProps = {
  name: string,
  fields: [
    val: {
      name: string,
      type: string
    }
  ]
}

export type SchemaVisualizerProps = {
  parsedSchema: [SchemaDisplayProps];
}