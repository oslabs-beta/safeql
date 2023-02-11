//This function takes the parsed schema and converts to initialNodes

export const constructRFNodes = (parsedSchemas) => {
  const nodes = [];
  let positionX = -250;
  let positionY = 25;

  parsedSchemas.forEach((schema) => {
    const currentData = {
      tableName: null,
    };

    if (positionX >= 550) {
      positionX = -250;
      positionY += 200;
    }
    positionX += 275;

    const obj = {
      type: 'custom',
      id: String(schema.node),
      position: { x: positionX, y: positionY },
      data: currentData,
    };

    const { name, fields } = schema;
    currentData.tableName = name;
    fields.forEach((subField) => {
      currentData[subField.name] = subField.type;
    });

    nodes.push(obj);
  });
  return nodes;
};
