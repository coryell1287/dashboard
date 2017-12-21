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


<h2
  id="dashboard"
  onClick={e => props.onMenuItemSelected(e)}
  className={sideBarHeaderStyles}
>
  Dashboard
</h2>
<h2
id="intent"
ref={props.intent}
data-open={props.itemClick === 'intent'}
onClick={e => props.onMenuItemSelected(e)}
onDoubleClick={e => props.onCloseOpenMenuItem(e)}
className={sideBarHeaderStyles}
  >
  Intent
  </h2>
<IntentMenu/>
</section>
<section className={sideBarContainerStyles}>
  <h2
    id="content"
    ref={props.content}
    data-open={props.itemClick === 'content'}
    onClick={e => props.onMenuItemSelected(e)}
    onDoubleClick={e => props.onCloseOpenMenuItem(e)}
    className={sideBarHeaderStyles}>
    Content
  </h2>
  <ContentMenu/>