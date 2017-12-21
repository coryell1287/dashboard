const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

const countedNames = names.reduce((allNames, name) => {
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});


const countedNames = names.reduce((allnames, name) => {
  if (name in allnames) {
    allnames[name]++;
  } else {
    allnames[name] = 1;
  }
  return allnames;
}, {});


const countedNames = names.reduce((allnames, name) => {
  if (name in allnames) {
    allnames[name]++;
  } else {
    allnames[name] = 1;
  }
  return allnames;
}, {});
