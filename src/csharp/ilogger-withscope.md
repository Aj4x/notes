# ILogger WithScope

## Summary

In the interests of avoiding repeated `ILogger.BeginScope` `using` blocks, I created an extension method to write log messages with a given scope. 

## Code

````C#
public static class LoggerExtensions
{
    public static void WithScope<TState>(this ILogger logger, TState state, Action<ILogger> logAction)
        {
            using (logger.BeginScope(state))
            {
                logAction.Invoke(logger);
            }
        }
}
````
## Usage

The usage is fairly simple and usually replaces the `using` block with one line. 

Assuming a collection of properties is in scope during the execution of the function which can be added to during runtime. Variable `logProps` is of type `Dictionary<string, object>` and `logEvent` is an `Microsoft.Extensions.Logging.EventId`.

````C#
log.WithScope(logProps, l => l.LogInformation(logEvent, "Log Message: {Property}", "We can still add properties to the message here"));
````
