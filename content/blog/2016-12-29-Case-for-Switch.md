+++
title = "Case for a Switch"
date = "2016-12-29T21:27:15-04:00"

#
# description is optional
#
# description = "An optional description for SEO. If not provided, an automatically created summary will be used."

tags = [ 'developer', 'ios', 'swift' ]
+++

Working on Swift, I've come across a pretty cool little thing. I've been writing <b>If/else statements</b> for checking conditionals for a while. It's one of the first things that anyone covers for flow control. You check to see if something is true or not and then act upon that check. Else you can do something different. But going into massive checks for lots of conditionals can be an eye sore.

<pre><code data-trim class="Swift">
let condition = true

if condition = true {
  print("Do something here.")
} else {
  print("You can do something else if you want to")
}
</code></pre>

You can also string together multiple <b>If/Else if/Else</b> statements for more complex checks:

<pre><code data-trim class="Swift">
let conditional = true


if conditional == true {
    print("It is true")
} else if conditional != true {
    print("Something else here")
} else {
    print("Last else")
}
</code></pre>

That is a very boring example but the idea is there. You can string together multiple <b>Else If</b> statements for more complex flow control inside your application. But there has to be a cleaner way to do this, and there is! Swift gives us the <b>Case Statement</b>

<pre><code data-trim class="Swift">
let conditional = true

switch conditional {
case true:
    print("It is true")
case false:
    print("It is false")
}
</code></pre>

Grand scheme of things, there is not a huge difference between my two examples. So why would you choose the <b>Switch</b> over the <b>If/Else</b> statement? For most conditional checks, the <b>Switch</b> statement should reduce the amount of code that you have to write. Let us take a more complex example and compare the two of them. Let us say we are checking for a number. We could write <b>If/Else</b> statements with multiple checks to see where that number is at but it could get really messy after a bit using "and" or "or" statements and nested <b>If/Else If/Else</b> statements to check for this number in the ranges we need. A <b>Switch</b> statement will check on multiple conditions and a range of conditions in a much cleaner syntax then the <b>If/Else</b> statement.

<pre><code data-trim class="Swift">
let conditional = 100
switch conditional {
case 0...10:
    print("The number is between 0 - 10")
case 11...20:
    print("The number is between 11 - 20")
case 21...50:
    print("The number is between 21 - 50")
case 51...100:
    print("The number is between 51 - 100")
default:
    print("It is outside of my range")
}
</code></pre>

Oh, you see that <b>Default</b> check right at the bottom? I didn't have that in my previous example. Why do I have it now? One thing on <b>Switch</b> statements is they have to be exhaustive. In our previous example, the conditional could be true or false and compiler was smart enough to know that. In the second example, we only check through 100. Well....there are a TON more numbers and we can't go through them all. You may not always require a <b>Default</b> statement if your <b>Switch</b> syntax, an example would be <b>Bool values</b> or <b>Enums</b>. If your variable is an <b>Enum</b> then there can only be so many options for it to be, so the <b>Switch</b> can be exhaustive.

<pre><code data-trim class="Swift">
enum employmentStatus {
    case fullTime
    case partTime
    case contractor
    case temp
    case intern
}

let john = employmentStatus.intern

switch john {
case employmentStatus.fullTime:
    print("Full Time Employee")
case employmentStatus.partTime:
    print("Part Time Employee")
case employmentStatus.contractor:
    print("Contractor Employee")
case employmentStatus.temp:
    print("Temp Employee")
case employmentStatus.intern:
    print("Intern Employee")
}
</code></pre>

I hope you found this useful. <b>If/Else</b> statements have their place and do cool things for conditional workflows. <b>Switch</b> statements can be very powerful though and much easier to read or understand. Hop into your Xcode playgrounds and create a few of them and see what they can do and let me know what you find. I think these things are cool.
