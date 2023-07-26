---
layout: en
title: Timed Task
nav_order: 2
parent: Release
grand_parent: Developer's Guide
---
{: .no_toc .header }

## What is Timed Task？

------
Do you encounter the following problems?
- Release the service every morning to make the daily update take effect
- Before work in the morning, the FAQ/Flows are already trained to have a direct conversation


For the above-mentioned similar periodical work, we have developed the Timed Task function.

- Optional release/debug
- Optional FAQ/Dialog flows
- task enable/pause
- Multiple tasks exist at the same time
- The task takes effect within the specified date

Two cycle modes supported:
- Cron Expression
- Fixed time Interval

------

### Cron Express

------

A cron expression is a string comprised of 6 or 7 fields separated by white space. Fields can contain any of the allowed values, along with various combinations of the allowed special characters for that field. The fields are as follows:

| Field Name | Mandatory | Allowed Values | Allowed Special Characters |
| --- | --- | --- | --- |
| Seconds | YES | 0-59 | , - \* / |
| Minutes | YES | 0-59 | , - \* / |
| Hours | YES | 0-23 | , - \* / |
| Day of month | YES | 1-31 | , - \* ? / L W
|
| Month | YES | 1-12 or JAN-DEC | , - \* / |
| Day of week | YES | 1-7 or SUN-SAT | , - \* ? / L # |
| Year | NO | empty, 1970-2099 | , - \* / |

So cron expressions can be as simple as this: \* \* \* \* ? \*

or more complex, like this: 0/5 14,18,3-39,52 \* ? JAN,MAR,SEP MON-FRI 2002-2010

Examples
--------

Here are some full examples:

<table><tbody><tr><td>Expression</td><td>Meaning</td></tr><tr><td><tt>0 0 12 * * ?</tt></td><td>Fire at 12pm (noon) every day</td></tr><tr><td><tt>0 15 10 ? * *</tt></td><td>Fire at 10:15am every day</td></tr><tr><td><tt>0 15 10 * * ?</tt></td><td>Fire at 10:15am every day</td></tr><tr><td><tt>0 15 10 * * ? *</tt></td><td>Fire at 10:15am every day</td></tr><tr><td><tt>0 15 10 * * ? 2005</tt></td><td>Fire at 10:15am every day during the year 2005</td></tr><tr><td><tt>0 * 14 * * ?</tt></td><td>Fire every minute starting at 2pm and ending at 2:59pm, every day</td></tr><tr><td><tt>0 0/5 14 * * ?</tt></td><td>Fire every 5 minutes starting at 2pm and ending at 2:55pm, every day</td></tr><tr><td><tt>0 0/5 14,18 * * ?</tt></td><td>Fire every 5 minutes starting at 2pm and ending at 2:55pm, AND fire every 5 minutes starting at 6pm and ending at 6:55pm, every day</td></tr><tr><td><tt>0 0-5 14 * * ?</tt></td><td>Fire every minute starting at 2pm and ending at 2:05pm, every day</td></tr><tr><td><tt>0 10,44 14 ? 3 WED</tt></td><td>Fire at 2:10pm and at 2:44pm every Wednesday in the month of March.</td></tr><tr><td><tt>0 15 10 ? * MON-FRI</tt></td><td>Fire at 10:15am every Monday, Tuesday, Wednesday, Thursday and Friday</td></tr><tr><td><tt>0 15 10 15 * ?</tt></td><td>Fire at 10:15am on the 15th day of every month</td></tr><tr><td><tt>0 15 10 L * ?</tt></td><td>Fire at 10:15am on the last day of every month</td></tr><tr><td><tt>0 15 10 L-2 * ?</tt></td><td>Fire at 10:15am on the 2nd-to-last last day of every month</td></tr><tr><td><tt>0 15 10 ? * 6L</tt></td><td>Fire at 10:15am on the last Friday of every month</td></tr><tr><td><tt>0 15 10 ? * 6L</tt></td><td>Fire at 10:15am on the last Friday of every month</td></tr><tr><td><tt>0 15 10 ? * 6L 2002-2005</tt></td><td>Fire at 10:15am on every last friday of every month during the years 2002, 2003, 2004 and 2005</td></tr><tr><td><tt>0 15 10 ? * 6#3</tt></td><td>Fire at 10:15am on the third Friday of every month</td></tr><tr><td><tt>0 0 12 1/5 * ?</tt></td><td>Fire at 12pm (noon) every 5 days every month, starting on the first day of the month.</td></tr><tr><td><tt>0 11 11 11 11 ?</tt></td><td>Fire every November 11th at 11:11am.</td></tr></tbody></table>

For more details please visit [quartz-scheduler](http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html)

### Fixed time Interval

------

Periodic execution is performed at fixed intervals in seconds.

## Concept

Common Settings:

- Mode                         : Fixed time interval or Cron
- Enable                       : Enable this task or not 
- Train Type                   : Debug or Release
- Trainable Module             : Participating modules
- Task execution time interval : Tasks can run during this time period

Optional Settings:

- Fixed time interval :

```text
`Fixed time interval (Second)` need to be set

- Positive integer
- Mix: 100
```

- Cron Expression:

```text
`Custom (Corn)` need to be set

- a valid cron expression
```

## How to use?

------

### Release at 00:00 every day
![01-timed-task.png](/assets/images/tutorial/release/01-timed-task.png)

### Release every 72 hours
![02-timed-task.png](/assets/images/tutorial/release/02-timed-task.png)