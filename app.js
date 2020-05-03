var vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('VueJS Instance (Güncellendi)');
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title değişti, yeni değer : ' + value);
    }
  }
});

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'VueJS Instance 2',
    showParagraph: false
  },
  methods : {
    changeTitle : function () {
       vm1.title = 'Instance 2 tarafından değiştirildi.';
    }
  }
});
