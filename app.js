const DATA_VIEW_PORT_ID = 'sponsors-list-view';
const DATA = EXHIBITOR_SPONSOR_LIST;
const DIV = document.getElementById(DATA_VIEW_PORT_ID);

const SPONSORS_LIST = [
  {
    heading: 'Platinum',
    content: DATA.filter(item => item.level === 'platinum')
  },
  {
    heading: 'Gold',
    content: DATA.filter(item => item.level === 'gold')
  },
  {
    heading: 'Silver',
    content: DATA.filter(item => item.level === 'silver')
  },
  {
    heading: 'Bronze',
    content: DATA.filter(item => item.level === 'bronze')
  }
];

DIV.classList.add('sponsor-section');

console.log('RUNNING', DATA, DIV);
sponsors();
exhibitors();

function sponsors() {
  SPONSORS_LIST.forEach(section => {
    var container = document.createElement('DIV');
    var header = document.createElement('h2');
    header.textContent = section.heading;
    header.classList.add('section-header-custom', section.heading.toLowerCase());
    container.classList.add('sponsor-section');
    container.appendChild(header);

    section.content.forEach(company => {
      var a = document.createElement('a');
      a.setAttribute('href', company.site);
      a.onclick = function(e) {
        e.preventDefault();
        var win = window.open(company.site, '_blank');
        win.focus();
      }
      a.classList.add('sponsor');
      var img = document.createElement('img');
      img.setAttribute('src', company.img);
      img.setAttribute('alt', company.name);
      a.appendChild(img);
      container.appendChild(a);
    });

    DIV.appendChild(container);
  });
}

function exhibitors() {
  var container = document.createElement('DIV');
  var header = document.createElement('h2');
  header.textContent = 'Exhibitors';
  header.classList.add('section-header-custom', 'exhibitors');
  container.classList.add('sponsor-section');
  container.appendChild(header);
  DIV.appendChild(container);
  DATA.forEach(company => {
    var a = document.createElement('a');
    a.setAttribute('href', company.site);
    a.classList.add('sponsor');
    var img = document.createElement('img');
    img.setAttribute('src', company.img);
    img.setAttribute('alt', company.name);
    a.appendChild(img);
    container.appendChild(a);
  });
}