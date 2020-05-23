(() => {  
  const DOMAIN = 'https://pgmgent-1920-students.github.io/case1-pgm-website-baas-pmg-jessvand/';

  const loadBlog = async () => {
    const response = await fetch(`${DOMAIN}/data/blog/index.json`);
    const jsonData = await response.json();
    console.log(jsonData);
  }

  const getTarget = async (id) => {
    const response = await fetch(`${DOMAIN}/data/blog/index.json`);
    const jsonData = await response.json();
    const target = jsonData.find(data => data.id === id);
    console.log(target);
  }

  const loadCases = async () => {
    const response = await fetch(`${DOMAIN}/data/cases/index.json`);
    const jsonData = await response.json();
    console.log(jsonData);
  }

  loadBlog();
  loadCases();
  getTarget('10737437-307e-4232-b687-b03a0d7cfa18');
})();