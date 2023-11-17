"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4867],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>m,MDXProvider:()=>c,mdx:()=>_,useMDXComponents:()=>u,withMDXComponents:()=>p});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=r.createContext({}),p=function(e){return function(n){var t=u(n.components);return r.createElement(e,a({},n,{components:t}))}},u=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(m.Provider,{value:n},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(t),c=o,d=p["".concat(i,".").concat(c)]||p[c]||f[c]||a;return t?r.createElement(d,s(s({ref:n},m),{},{components:t})):r.createElement(d,s({ref:n},m))}));function _(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var m=2;m<a;m++)i[m]=t[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},63391:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var r=t(87462),o=(t(67294),t(3905));const a={id:"anon_targets",title:"BXL and Anonymous Targets"},i=void 0,s={unversionedId:"developers/anon_targets",id:"developers/anon_targets",title:"BXL and Anonymous Targets",description:"Anonymous targets",source:"@site/../docs/developers/bxl_anon_target.md",sourceDirName:"developers",slug:"/developers/anon_targets",permalink:"/docs/developers/anon_targets",draft:!1,tags:[],version:"current",frontMatter:{id:"anon_targets",title:"BXL and Anonymous Targets"},sidebar:"manualSidebar",previous:{title:"BXL Telemetry",permalink:"/docs/developers/bxl_telemetry"},next:{title:"BXL and Dynamic Outputs",permalink:"/docs/developers/dynamic_output"}},l={},m=[{value:"Anonymous targets",id:"anonymous-targets",level:2},{value:"APIs",id:"apis",level:3},{value:"Complete Example",id:"complete-example",level:3}],p={toc:m};function u(e){let{components:n,...t}=e;return(0,o.mdx)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"anonymous-targets"},"Anonymous targets"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"/docs/rule_authors/anon_targets"},"Anonymous targets")," are supported in BXL.\nAnonymous targets are keyed by the attributes, and allow you to share/cache work\nmore effectively."),(0,o.mdx)("p",null,"You might want to use anonymous targets if there is some heavy Starlark\nevaluation which can be cached, or if you want to cache local actions."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Note"),": The context object within the anon target rule is ",(0,o.mdx)("strong",{parentName:"p"},"not")," a BXL\ncontext, but a normal rule analysis context."),(0,o.mdx)("h3",{id:"apis"},"APIs"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"actions")," object returned from ",(0,o.mdx)("inlineCode",{parentName:"p"},"ctx.bxl_actions().actions")," (equivalent of\n",(0,o.mdx)("inlineCode",{parentName:"p"},"ctx.actions")," in normal rules) has the following functions for anonymous\ntargets:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},'anon_target(rule: "rule", attrs: Dict[str, Any]) -> "promise"'),": generates a\nsingle anonymous target. Return type is an unresolved ",(0,o.mdx)("inlineCode",{parentName:"li"},"promise"),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},'anon_targets(rules: [("rule", Dict[str, Any])]) -> "promise"'),": generates a\nlist of anonymous targets. Return type is an unresolved ",(0,o.mdx)("inlineCode",{parentName:"li"},"promise")," representing\nthe list of anonymous targets."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},'artifact_promise(promise: "promise") -> "promise_artifact"'),": turns an\nunresolved promise into a kind of artifact. See\n",(0,o.mdx)("a",{parentName:"li",href:"/docs/rule_authors/anon_targets#convert-promise-to-artifact"},"Convert promise to artifact"),"\nfor more info on why you might want to use this.")),(0,o.mdx)("p",null,"The resulting promise also has ",(0,o.mdx)("inlineCode",{parentName:"p"},"map()")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"join()")," functions. ",(0,o.mdx)("inlineCode",{parentName:"p"},"map()")," applies a\nfunction to the promise's results, and ",(0,o.mdx)("inlineCode",{parentName:"p"},"join()")," turns multiple promises into a\nsingle promise."),(0,o.mdx)("p",null,"To resolve promises in BXL, ",(0,o.mdx)("inlineCode",{parentName:"p"},"bxl_ctx")," has a ",(0,o.mdx)("inlineCode",{parentName:"p"},"resolve()")," function, which takes in\nthe analysis actions instance (",(0,o.mdx)("inlineCode",{parentName:"p"},"actions")," object returned from\n",(0,o.mdx)("inlineCode",{parentName:"p"},"ctx.bxl_actions().actions"),") and a single promise and returns an optional\npromise value, if there is one. If you intend to create multiple promises, using\n",(0,o.mdx)("inlineCode",{parentName:"p"},"join()")," to produce a single promise will allow you to resolve them concurently\nwith a single ",(0,o.mdx)("inlineCode",{parentName:"p"},"resolve()")," call."),(0,o.mdx)("p",null,"Small example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},"def _my_impl(ctx):\n    bxl_actions = ctx.bxl_actions() # pass in relevant params to configure the execution platform resolution\n    actions = ctx.bxl_actions().actions\n\n    promise1 = actions.anon_target(my_anon_rule1, my_attrs1).promise\n    promise2 = actions.anon_target(my_anon_rule2, my_attrs2).promise.map(my_map_function)\n\n    joined = promise1.join(promise2)\n\n    resolved = ctx.resolve(actions, joined)\n\n    # do some more stuff ...\n")),(0,o.mdx)("h3",{id:"complete-example"},"Complete Example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'## anon_bxl_rules.bzl ############\n\n# Define an anonymous rule.\n\nMirrorInfo = provider(fields = ["mirrored_attrs"])\n\n# Anonymous rule which writes some silly output, and also mirrors all attributes received\ndef _mirror_impl(ctx: "context") -> ["provider"]:\n    out = ctx.actions.declare_output("my_output")\n    ctx.actions.write(out, "my_content")\n    return [DefaultInfo(default_outputs = [out]), MirrorInfo(mirrored_attrs = ctx.attrs)]\n\nmy_mirror_rule = rule(impl = _mirror_impl, attrs = {\n    "false": attrs.bool(),\n    "int": attrs.int(),\n    "list_string": attrs.list(attrs.string()),\n    "string": attrs.string(),\n    "true": attrs.bool(),\n})\n\n# Will be used in a map function in my_script.bxl below\nStringInfo = provider(fields = ["my_string"])\n\n## my_script.bxl ############\n\nload(":anon_bxl_rules.bzl", "MirrorInfo", "StringInfo", "my_mirror_rule")\n\ndef _anon_target_example(ctx):\n    bxl_actions = ctx.bxl_actions()\n    actions = bxl_actions.actions\n\n    # Attrs to pass into the anonymous target. An anonymous target is defined by the hash of its attributes\n    my_attrs = {\n        "false": False,\n        "int": 42,\n        "list_string": ["a", "b", "c"],\n        "string": "foo-bar-string",\n        "true": True,\n    }\n\n    # A function to be applied to the promise (result of anon target), producing a promise with the resulting value.\n    def my_function(providers):\n        # Do something with the attrs. In this example, we are validating that the attrs are what we expect.\n        mirrored_fields = providers[MirrorInfo].mirrored_attrs\n        assert_eq(mirrored_fields.true, True)\n        assert_eq(mirrored_fields.false, False)\n        assert_eq(mirrored_fields.int, 42)\n        assert_eq(mirrored_fields.string, "foo-bar-string")\n        assert_eq(mirrored_fields.list_string, ["a", "b", "c"])\n\n        outputs = providers[DefaultInfo].default_outputs\n        # These are the providers this target returns\n        return [DefaultInfo(default_outputs = outputs), StringInfo(my_string = "map function succeeded!")]\n\n    # Create an anonymous target by passing in "my_attrs" into "my_mirror_rule", and returns providers.\n    # Specifically, it returns "DefaultInfo" and "MirrorInfo", as defined in "my_mirror_rule"\n    # Then, we map the result to "my_function", which does some validation\n    promise = actions.anon_target(my_mirror_rule, my_attrs).promise.map(my_function)\n\n    # Resolving the promise returns a "provider_collection", which was defined by "my_function" above.\n    # `DefaultInfo` is at index 0, `StringInfo` is at index 1\n    promise_result = ctx.resolve(actions, promise)\n\n    ensured = ctx.output.ensure(promise_result[0].default_outputs[0])\n    # should print out location of the output, which contains the "my_content" string as defined in anon_bxl_rules.bzl above\n    ctx.output.print(ensured)\n\n    # should print out "map function succeeded!"\n    ctx.output.print(promise_result[1].my_string)\n\ndef assert_eq(a, b):\n    if a != b:\n        fail("Expected {} == {}".format(a, b))\n\nanon_target_example = bxl_main(\n    impl = _anon_target_example,\n    cli_args = {\n    },\n)\n')))}u.isMDXComponent=!0}}]);