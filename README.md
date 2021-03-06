# Check-Me-In
Automated airline check-in service, with built-in scheduling. 

### Technology used
I used the 7 RESTful methods, basing my project heavily on our Fruits lecture. For CSS frameworks, I experimented with many, including Materialize, Skeleton, Foundation, and Semantic, before finally settling on Bootstrap. I felt the others simply changed too much out of the box, while Bootstrap simply complimented everything nicely.

### Wins
The end product is a modest tribute to the Fruits lecture. It embodies everything I needed it to, while adding some different styling to make it a little more professional looking. 

Another win for me was figuring out how to convert a user-defined time (e.g., 9:05pm) from military time to standard. Apparently, setting "type" to "time" in my input HTML results in a string that corresponds to military time. So, in order to convert it, I started by getting rid of the colon (":") and replacing it with a decimal point. Fortunately, the .replace() function also converted it into a Number, which then enabled me to subtract 12 from it (if it's greater than 12 to begin with). Afterwards, I could limit the output to two decimal places (because it liked to, for some reason, expand my answer to 10 or more deicmal places in some cases), swap the colon back in for a proper Time display, and enter it into the user's readout. It took me awhile to figure out, but I really liked the bit-by-bit problem solving I had to do.

Here's what it eventually looked like (along with the required HTML tags):

```javascript
<% let checkIn = flight.checkInTime %>
                <% time = checkIn.replace(':', '.'); %>
                <% if (time > 12) { %>
                  <% let nonMilitary = time - 12; %>
                  <% let timeString = nonMilitary.toFixed(2); %>
                  <% let newTime = timeString.replace('.', ':'); %>
                  <li><b>Check-in Time:  </b> <%= newTime %>PM </li>
                <% } else { %>
                  <li><b>Check-in Time:  </b> <%= checkIn %>AM </li>
                <% } %>
          <li><b>Updated At:  </b> <%= flight.updatedAt %> </li>
```

### Struggles and Unfinished Work
I actually finished the MVP portion somewhere around Saturday afternoon. Not content to let things stay simple, I spent an additional 35+ hours painstakingly trying to incorporate the ability to create accounts/passwords, while retaining the main feature of the website (making a check-in list). Unfortunately, I ran into numerous problems, first with getting two separate models ("Users" and "Flights") to talk to each other. Later on, I ran into a second problem when I tried combining them into one model, but deleting a Flight/Check-in list resulted in deleting the entire user's account. I simply couldn't delete the relevant info, nor could I figure out how to call the ID from one model and have it reference the second model. 

Many times I gave up and said that's it. But I kept coming back again and again, getitng a little further each time. I finally gave up for good when I got to a point where I was just breaking the code more than any progress I was making. However, I have since moved this broken code into a sub-branch of my main GitHub repo, so that I can go back when I'm more experienced and see if I can fix it. 

Yet another struggle I had was the realization that I am simply not a very good UI/UX designer. I'm disappointed, because I honestly thought I was more visually artistic. However, one simply has to look at my site to know that I need to either take a few UI/UX workshops, or just employ someone better than me (pretty much anyone). 

### Conclusion
A bittersweet takeaway from all this is that the sheer number of hours experimenting with broken code really forced me to examine everything to a very minute degree. Of the 35+ hours I spent on it, I'd say 30% was coding and the rest was me thinking through all the lines of logic and fixing the breaks. This enabled me to be intimately familiar with my code, and I probably learned more from this segment of the project than any other part of it. 
