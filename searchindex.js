Object.assign(window.search, {"doc_urls":["index.html#about","csharp/index.html#c","csharp/index.html#extension-methods","csharp/ilogger-withscope.html#ilogger-withscope","csharp/ilogger-withscope.html#summary","csharp/ilogger-withscope.html#code","csharp/ilogger-withscope.html#usage","golang/index.html#go"],"index":{"documentStore":{"docInfo":{"0":{"body":0,"breadcrumbs":0,"title":0},"1":{"body":0,"breadcrumbs":2,"title":1},"2":{"body":1,"breadcrumbs":3,"title":2},"3":{"body":0,"breadcrumbs":4,"title":2},"4":{"body":14,"breadcrumbs":3,"title":1},"5":{"body":17,"breadcrumbs":3,"title":1},"6":{"body":37,"breadcrumbs":3,"title":1},"7":{"body":0,"breadcrumbs":2,"title":1}},"docs":{"0":{"body":"","breadcrumbs":"About » About","id":"0","title":"About"},"1":{"body":"","breadcrumbs":"C# » C#","id":"1","title":"C#"},"2":{"body":"ILogger.WithScope","breadcrumbs":"C# » Extension methods","id":"2","title":"Extension methods"},"3":{"body":"","breadcrumbs":"C# » ILogger.WithScope » ILogger WithScope","id":"3","title":"ILogger WithScope"},"4":{"body":"In the interests of avoiding repeated ILogger.BeginScope using blocks, I created an extension method to write log messages with a given scope.","breadcrumbs":"C# » ILogger.WithScope » Summary","id":"4","title":"Summary"},"5":{"body":"public static class LoggerExtensions\n{ public static void WithScope<TState>(this ILogger logger, TState state, Action<ILogger> logAction) { using (logger.BeginScope(state)) { logAction.Invoke(logger); } }\n}","breadcrumbs":"C# » ILogger.WithScope » Code","id":"5","title":"Code"},"6":{"body":"The usage is fairly simple and usually replaces the using block with one line. Assuming a collection of properties is in scope during the execution of the function which can be added to during runtime. Variable logProps is of type Dictionary<string, object> and logEvent is an Microsoft.Extensions.Logging.EventId. log.WithScope(logProps, l => l.LogInformation(logEvent, \"Log Message: {Property}\", \"We can still add properties to the message here\"));","breadcrumbs":"C# » ILogger.WithScope » Usage","id":"6","title":"Usage"},"7":{"body":"","breadcrumbs":"Go » Go","id":"7","title":"Go"}},"length":8,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"<":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"g":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}}}},"d":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}},"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"k":{"df":2,"docs":{"4":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}}}},"c":{"df":1,"docs":{"1":{"tf":1.0}},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}},"d":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"<":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.0}}}}}}}},"f":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"o":{"df":1,"docs":{"7":{"tf":1.0}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"g":{"df":2,"docs":{"3":{"tf":1.0},"5":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{".":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}}},"l":{".":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"(":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}}}}}},"df":1,"docs":{"6":{"tf":1.0}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"g":{".":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"(":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}},"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{".":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"(":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"g":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":2,"docs":{"4":{"tf":1.0},"6":{"tf":1.0}},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"6":{"tf":1.0}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{".":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"(":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":1,"docs":{"5":{"tf":1.0}},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"4":{"tf":1.0},"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"d":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.0}}},"df":0,"docs":{}}}}},"i":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{".":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}}}}}}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}},"o":{"b":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}}}}}}},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"l":{"a":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"s":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":2,"docs":{"4":{"tf":1.0},"6":{"tf":1.0}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"t":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}},"i":{"c":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"df":3,"docs":{"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}},"v":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.0}},"e":{"<":{"df":0,"docs":{},"t":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{">":{"(":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}},"breadcrumbs":{"root":{"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"<":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"g":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}}}},"d":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}},"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"k":{"df":2,"docs":{"4":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}}}},"c":{"df":6,"docs":{"1":{"tf":1.7320508075688772},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}},"d":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"<":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"4":{"tf":1.0}}}}}}}},"f":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"o":{"df":1,"docs":{"7":{"tf":1.7320508075688772}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"g":{"df":2,"docs":{"3":{"tf":1.4142135623730951},"5":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{".":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":5,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}}},"l":{".":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"(":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}}}}}},"df":1,"docs":{"6":{"tf":1.0}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"g":{".":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"(":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}},"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{".":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"(":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"g":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":2,"docs":{"4":{"tf":1.0},"6":{"tf":1.0}},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"6":{"tf":1.0}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{".":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"(":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":1,"docs":{"5":{"tf":1.0}},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"4":{"tf":1.0},"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"d":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"4":{"tf":1.0}}},"df":0,"docs":{}}}}},"i":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{".":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}}}}}}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}},"o":{"b":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}}}}}}},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"l":{"a":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"s":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":2,"docs":{"4":{"tf":1.0},"6":{"tf":1.0}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"t":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}},"i":{"c":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}},"df":3,"docs":{"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}},"v":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.4142135623730951}},"e":{"<":{"df":0,"docs":{},"t":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{">":{"(":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}},"title":{"root":{"c":{"df":1,"docs":{"1":{"tf":1.0}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"g":{"df":0,"docs":{},"o":{"df":1,"docs":{"7":{"tf":1.0}}}},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}}},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});