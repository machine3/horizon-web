const getResourcePath = (pathname: string) => {
  const filteredPath = pathname.split('/').filter(item => item !== '' && item !== 'group')
  let path = '';
  for (let i = 0; i < filteredPath.length; i += 1) {
    const item = filteredPath[i];
    if (item === '-') {
      break
    }
    path += `/${item}`
  }
  return path;
};

const getResourceName = (pathname: string) => {
  const filteredPath = pathname.split('/').filter(item => item !== '')
  let name = '';
  for (let i = 0; i < filteredPath.length; i += 1) {
    const item = filteredPath[i];
    if (item === '-') {
      break
    }
    name = item
  }
  return name;
};

const getBreadcrumb = (pathname: string) => {
  const filteredPath = pathname.split('/').filter(item => item !== '' && item !== 'group' && item !== "-")
  let currentLink = '';
  const result = [];
  for (let i = 0; i < filteredPath.length - 1; i += 1) {
    const item = filteredPath[i];
    currentLink += `/${item}`;
    result.push({
      path: currentLink,
      breadcrumbName: item
    });
  }
  result.push({
    path: pathname,
    breadcrumbName: filteredPath[filteredPath.length - 1]
  })
  return result;
};

const getAvatarColorIndex = (title: string) => {
  let count = 0;
  for (let i = 0; i < title.length; i += 1) {
    const t = title[i];
    const n = t.charCodeAt(0);
    count += n;
  }

  return count % 7 + 1;
}

export default {
  getResourcePath,
  getResourceName,
  getBreadcrumb,
  getAvatarColorIndex
}
