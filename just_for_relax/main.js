(function () {
  var Loader;

  Loader = class Loader {
    constructor() {
      // Selectors
      this.$loader = $('.loader');
      this.$inc = $('.loader-increment');
      this.$percent = $('.loader-percent');
      this.$loader_text = $('.loader-text');
      // Variables
      this.loaded = 0;
      this.increments = $.makeArray(this.$inc);
      this.loader_length = this.increments.length;
      this.ratio = Math.round(100 / this.loader_length);
      this.current_inc = null;
      // Inits
      this._load();
    }

    _load() {
      var loading;
      return loading = setInterval(() => {
        if (this.loaded < 99.9) {
          this.loaded += .1;
          return this._update_display();
        } else {
          this.$loader_text.text('Loaded');
          return this.$percent.text('100.0%');
        }
      }, 10);
    }

    _update_display() {
      var new_inc, percent, prepend;
      percent = Math.round(this.loaded * 10) / 10;
      prepend = '';
      if (this.loaded < 10) {
        prepend = "  ";
      } else if (this.loaded < 100) {
        prepend = " ";
      } else {
        prepend = "";
      }
      this.$percent.text(`${prepend}${percent}%`);
      new_inc = Math.round(this.loaded / this.ratio);
      if (new_inc !== this.current_inc) {
        this.current_inc = new_inc;
        return $(this.increments[this.current_inc]).text("#");
      }
    }};



  $(function () {
    if (window.App == null) {
      window.App = {};
    }
    return window.App.Loader = new Loader();
  });

}).call(this);

//# sourceURL=coffeescript