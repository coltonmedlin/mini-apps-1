

module.exports.jsonToCsv = (req, res, next) => {
  const jsonInput = JSON.parse(req.body.textarea);
  let csv = '';

  //add the ids to the top row
  for (id in jsonInput) {
    if (id !== 'children')
    csv += `${id},`;
  };
  //rid the last comma
  csv = csv.slice(0, -1);

  //add a line break
  csv += '\n'

  //add the main data
  for (id in jsonInput) {
    if (id !== 'children') {
      csv += `${jsonInput[id]},`;
    }
  };
   //rid the last comma
   csv = csv.slice(0, -1);

   //add a line break
   csv += '\n'

  const parseChildren = (children) => {
    children.forEach((child) => {
      for (id in child) {
        if (id !== 'children') {
          csv += `${child[id]},`;
        } else {
          csv = csv.slice(0, -1);
          csv += '\n';
          parseChildren(child.children);
        }
      };
    })
  };

  //handle the children
  if (jsonInput.children.length > 0) {
    parseChildren(jsonInput.children);
  }

  csv = csv.slice(0, -1);

  console.log(csv);
  req.body.csv = csv;
  next();
};