(() => {  
  const DOMAIN = 'https://pgmgent-1920-students.github.io/case1-pgm-website-baas-pmg-jessvand/';

  const loadBlog = async () => {
    const response = await fetch(`${DOMAIN}/data/blog/index.json`);
    const jsonData = await response.json();
    console.log(jsonData);
  }

  const loadCases = async () => {
    const response = await fetch(`${DOMAIN}/data/cases/index.json`);
    const jsonData = await response.json();
    console.log(jsonData);
  }

  loadBlog();
  loadCases();
})();