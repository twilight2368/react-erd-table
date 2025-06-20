const data = require("../data.json");

function getUniqueFieldTypes(dataArray) {
  const fieldTypes = dataArray.flatMap((item) =>
    (item.permissions || []).map((p) => p.fieldType)
  );

  const uniqueFieldTypes = [...new Set(fieldTypes)];
  return uniqueFieldTypes;
}

console.log(getUniqueFieldTypes(data));
