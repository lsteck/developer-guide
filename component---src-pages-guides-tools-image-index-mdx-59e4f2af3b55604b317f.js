(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{r8Uu:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return r})),t.d(n,"default",(function(){return m}));t("91GP"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("q1tI");var a=t("7ljp"),l=t("013z"),i=t("T0C+");t("qKvR");function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var r={},o=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",n)}},s=o("PageDescription"),b=o("InlineNotification"),p={_frontmatter:r},u=l.a;function m(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,["components"]);return Object(a.b)(u,c({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)(s,{mdxType:"PageDescription"},Object(a.b)("p",null,"The ",Object(a.b)(i.a,{name:"env",mdxType:"Globals"})," includes the CLI Tools Docker image")),Object(a.b)("p",null,"The ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cli-tools",title:"IBM Garage for Cloud Developer Tools Docker image"}),"IBM Garage command-line tools")," is a Docker image with many useful IBM Cloud CLI tools already installed. Rather than installing all of these tools on your local computer, you can simply pull and run this image."),Object(a.b)("h2",null,"Running the client"),Object(a.b)(b,{mdxType:"InlineNotification"},Object(a.b)("p",null,"You must ",Object(a.b)("a",c({parentName:"p"},{href:"https://www.docker.com/products/docker-desktop"}),"install Docker Desktop")," on your local computer to run this Docker image.")),Object(a.b)("p",null,"Start the client to use it."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To run the ",Object(a.b)("inlineCode",{parentName:"p"},"icclient")," container:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",c({parentName:"pre"},{className:"language-bash"}),"docker run -itd --name icclient ibmgaragecloud/cli-tools\n")),Object(a.b)("p",{parentName:"li"},"  This  assumes the image’s default name, ",Object(a.b)("inlineCode",{parentName:"p"},"ibm-garage-cli-tools"),"."))),Object(a.b)("p",null,"Once the client is running in the backgroud, use it by opening a shell in it."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To use the ",Object(a.b)("inlineCode",{parentName:"p"},"icclient")," container, exec shell into it:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",c({parentName:"pre"},{className:"language-bash"}),"docker exec -it icclient /bin/bash\n")),Object(a.b)("p",{parentName:"li"},"  Your terminal is now in the container. "))),Object(a.b)("p",null,"Use this shell to run commands using the installed tools and scripts."),Object(a.b)("p",null,"When you’re finished running commands, to exit the client."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To leave the ",Object(a.b)("inlineCode",{parentName:"p"},"icclient")," container shell, as with any shell:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",c({parentName:"pre"},{className:"language-bash"}),"exit\n")),Object(a.b)("p",{parentName:"li"},"  The container will keep running after you exit its shell."))),Object(a.b)("p",null,"If the client stops:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To run the ",Object(a.b)("inlineCode",{parentName:"p"},"icclient")," container again:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",c({parentName:"pre"},{className:"language-bash"}),"docker start icclient\n")))),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"icclient")," container is just a Docker container, so all ",Object(a.b)("a",c({parentName:"p"},{href:"https://docs.docker.com/engine/reference/commandline/cli/"}),"Docker CLI commands")," work."),Object(a.b)("h2",null,"Using the client"),Object(a.b)("p",null,"From a client shell, run ",Object(a.b)("inlineCode",{parentName:"p"},"image-help")," to get a list of available tools, scripts, and ENV properties:"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-bash"}),"$ image-help\nAvailable env properties (can be overridden for individual commands):\n > BM_API_KEY - the IBM Cloud api key\n > REGION - the IBM Cloud region (e.g. us-south)\n > RESOURCE_GROUP - the IBM Cloud resource group\n > CLUSTER_NAME - the name of the kubernetes cluster in IBM Cloud\n > SL_USERNAME - the Classic Infrastructure user name or API user name (e.g. 282165_joe@us.ibm.com)\n > SL_API_KEY - the Classic Infrastructure api key\n\nAvailable tools:\n > terraform (with helm, kube, and ibm provider plugins)\n > calicoctl\n > ibmcloud (with container-service, container-registry, and cloud-databases plugins)\n > kubectl\n > kustomize\n > oc\n > helm\n > docker\n > git\n > nvm\n > node (v11.12.0 currently installed)\n > solsa\n > yo\n\nAvailable scripts:\n > init.sh {BM_API_KEY} {REGION} {RESOURCE_GROUP} {CLUSTER_NAME}\n > createNamespaces.sh\n > deleteNamespace.sh\n > installHelm.sh\n > cluster-pull-secret-apply.sh\n > setup-namespace-pull-secrets.sh\n > checkPodRunning.sh\n > copy-secret-to-namespace.sh\n")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-tools-image-index-mdx-59e4f2af3b55604b317f.js.map