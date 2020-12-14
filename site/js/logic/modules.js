$(document).ready(function () {

   displayUserModules();
   //displayDBModules();

});

function addModule(module) 
{
   var moduleID = module.getAttribute("data-module-id");
   alert("This is the the ID: " + moduleID);

}

function removeModule(module) 
{
   var moduleID = module.getAttribute("data-module-id");
   alert("This is the the ID: " + moduleID);

}

function displayUserModules()
{
   var table = document.getElementById('modules');
   
   var module = '';
   for(var i = 0; i < 4; i++)
   {
      module += makeUserModuleEntry('moduleName ' + i, i, i + ' Nov 2020', i);
   }

   table.innerHTML = module;
}

function displayDBModules()
{
   var table = document.getElementById('dynamic_db_modules');
   
   var module = '';
   for(var i = 0; i < 10; i++)
   {
      module += makeDBModuleEntry('Name ' + i, i, i);
   }

   table.innerHTML = module;
}

function makeUserModuleEntry(moduleName, moduleCode, dateAdded, moduleID) 
{
   var entry = "<tr><td>"+ moduleName +"</td><td>"+ moduleCode +"</td><td>"+ dateAdded +"</td>";
   entry += "<td><a data-toggle='tooltip' title='remove module' onclick='removeModule(this)'";
   entry += "data-module-id='"+ moduleID +"' href='#' class='btn btn-outline-primary round-btn'>-</a></td></tr>";
   return entry;
}

function makeDBModuleEntry(moduleName, moduleCode, moduleID)
{
   var entry = "<tr><td>"+ moduleName +"</td><td>"+ moduleCode +"</td>";
   entry += "<td><a data-toggle='tooltip' title='add module' onclick='addModule(this)'";
   entry += "data-module-id='"+ moduleID +"' href='#' class='btn btn-outline-primary round-btn'>+</a></td></tr>";
   return entry;
}
