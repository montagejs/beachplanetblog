montageDefine("845cab0","vendor/requirejs/dist/dist-site",{dependencies:["./file","child_process"],factory:function(e){function t(){i=n[v],v+=1,i&&(r=i+".trans",console.log("Creating "+i),y.exec("./Markdown.pl --html4tags "+i+" > "+r,function(e){if(e)return console.log("Could not markdown "+i),t(),void 0;if(a=b.readFile(r),f=_.exec(a),f=f&&f[1],a=s+a+o,l=a.match(/<h1>([^<]+)<\/h1>/),l=l&&l[1]?l[1]:"",a=a.replace(/\$\{title\}/,l),a=a.replace(/href="requirejs\/tree\/master\/docs\//g,'href="docs/').replace(/href="([^"]+)\.md/g,'href="$1.html'),c=i.replace(/\/[^\/]+$/,"").replace(/^\.\/dist-site\//,""),c&&"dist-site"!==c){for(g=!1,p=c.split("/").length,c="",m=0;p-1>m;m++)c+="../";u=c+"main.css",h=c+"ie.css",d=c+"init.js"}else g=!0,c="./",u="main.css",h="ie.css",d="init.js";a=a.replace(/HOMEPATH/g,c),a=a.replace(/\main\.css/,u),a=a.replace(/\ie\.css/,h),a=a.replace(/\init\.js/,d),f&&(a=a.replace(/<title>[^<]*<\/title>/,"<title>"+f+"</title>")),g&&(a=a.replace(/href="\.\.\/"/g,'href="./"').replace(/class="local" href="([^"]+)"/g,'class="local" href="docs/$1"')),b.saveFile(i,a),b.deleteFile(r),t()}))}var n,i,r,a,s,o,l,c,u,h,d,p,m,f,g=!1,v=0,_=/<h1>([^<]+)<\/h1>/,b=e("./file"),y=e("child_process");b.copyFile("init.js","./dist-site/init.js"),b.copyDir("fonts","./dist-site/fonts",/\w/),b.copyFile("../index.html","./dist-site/index.html"),b.copyDir("../docs/","./dist-site/docs/",/\w/),s=b.readFile("pre.html"),o=b.readFile("post.html"),n=b.getFilteredFileList("./dist-site",/\.html$/,!0),t()}});