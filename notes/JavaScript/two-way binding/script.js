var demo1 = mvvc('#demo1', {
  model: {
    name: 'world',
    css: 'green'    
  }
});

var demo2 = mvvm('#demo2', {
  type: 'form', // 同步
  model: {
    name: '',
    password: ''
  }
})