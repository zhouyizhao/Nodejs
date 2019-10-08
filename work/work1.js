const src=process.argv[2];
if(src=='list'){
  var fs=require('fs') 
  function geFileList(path){
    var fileList=[];
    readFile(path,fileList);
    return fileList;
  }
  function readFile(path,fileList){
    files=fs.readdirSync(path);
    files.forEath(walk);
    function walk(file){
      states=fs.statSync(path+'/'+file);
      if(states.isDirectory()){
        readFile(path+'/'+file,filesList);
      }else{
        var obj=new Object();
        obj.size=states.size;
        obj.name=file;
        fileList.push(obj);
      }
    }
  }  
  function writeFile(fileName,data){
    fs.writeFile(filename,data,'utf-8',complete);
    function complete(){
      console.log("文件生成成功!");
    }
  }
  var path = require("path");
  var url = path.resolve('./');
  var filesList=geFileList(url);
  filesList.sort(sortHandler);
  function sortHandler(a,b){
    if(a.size>b.size)
      return -1;
    else if(a.size<b.size) return 1
    return 0;
  }
  var str='';
  for (var i=0;i<filesList.length;i++){
    var item=fileList[i];
    var desc="{fileName:"+item.name+","+"fileSize:"+(item.size/1024).toFixed(2)+"}";
    str+=desc+"\n"
  }
  writeFile("text.txt",str);
}
else if(src=="mkdir folder"){
  const fs=require('fs');
  fs.writeFileSync(folder,'');
}
else{
  console.log('命令行参数错误！')；
}
