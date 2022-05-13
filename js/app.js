const app = new Vue({
  el: "#app",
  data: {
    titulo:'To-Do list',
    tareas:[],
    nuevaTarea:''
  },
  methods: {
    agregarTarea: function(){
      this.tareas.push({
        nombre: this.nuevaTarea,
        estado: false,
      });
      this.nuevaTarea = '';
      localStorage.setItem('Tareas', JSON.stringify(this.tareas));
    },
    editarTarea: function(index){
      this.tareas[index].estado = true;
      localStorage.setItem('Tareas', JSON.stringify(this.tareas));

    },
    eliminarTarea: function(index){
      this.tareas.splice(index,1);
      localStorage.setItem('Tareas', JSON.stringify(this.tareas));

    } 
  },
  created: function(){
    let dataBase = JSON.parse(localStorage.getItem('Tareas'));
    if(dataBase===null){
      this.tareas = [];
    } else{
      this.tareas = dataBase;
    }

  }
});