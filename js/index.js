class Page {
  constructor(title, author, link) {
    this.title = title;
    this.author = author || 'Desconocido';
    this.link = link;
  }
}

const app = new Vue({
  el: 'main',
  data: {
    form : {
      title: '',
      author: '',
      link: '', 
      reset() {
        this.title = '', 
        this.author = '',
        this.link = ''
      }
    },
    infoList: []
  },
  methods: {
    savePage() { 
      if (this.form.title && this.form.link )  {
          this.infoList.push( new Page(this.form.title, this.form.author, this.form.link) );
          this.form.reset();  
      }
    },
     deletePage(index) {
       this.infoList.splice(index, 1);
     }
  }
})