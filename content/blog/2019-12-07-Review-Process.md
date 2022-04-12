+++
title = "2019 in Review"
date = "2019-12-07T21:27:15-04:00"

#
# description is optional
#
# description = "An optional description for SEO. If not provided, an automatically created summary will be used."

tags = ['personal', 'update', 'learning' ]
+++

I saw a challange on LinkedIn that said instead of trying to predict technologies for the next year, make sure to do a year in review post to your blog that shows off your accomplishments for 2019. Now, I'm not great at tooting my own horn here. I have struggled over the last couple of years on how best to showcase any accomplishment that I have made. But I'm going to <b>REALLY</b> try and showcase something today to review my last year.

Let us start!

### 1. I've made it into mobile development, iOS development.

This has been over a year in the process. Last year I started this job with the idea that I would transition into a mobile developer role. I was going to assist with more DevOps (which I still really enjoy doing BTW) and help migrate a bunch of stuff into AWS. This was cool, but the cherry on the cake would be a transition into mobile. Well, things didn't really pan out that way. I haven't done much DevOps work at all and pretty much have done nothing but mobile development since day one. What have I developed you ask.....let me tell you!

I've worked on the main application written in Xamarin Forms. I've learned C# specificity for this, but not a ton as I've also worked really hard to transition them away from Forms. I find it (at least how things are implemented here) limiting and I feel we can do so much more if we dive into native mobile development. I've read a lot of different blog posts on the pro/cons of hybrid mobile development and felt that pushing for native applications was the right way to go. I didn't feel that any of the hybrid stuff (maybe Flutter is an exception here) did not offer the same flexibility and functionality as just creating our apps in Swift/Kotlin.

That leads to the other two applications. I created a reservations app for our company to make camping reservations. This was for a specific client and I don't know how/if we will expand this to any additional clients or not. But creating this from scratch in 100% swift was fun. Also, I was able to get Apple Pay to work before we pushed it out. I have a bunch of updates to perform on this application but the basics of it is there and shouldn't be two hard to expand upon.

The second application was an enterprise application for customers using Realm as the local DB. This was interesting as it really pushed me to learn a bit more about multithreading, pushed my understanding of closures, using notification center for messaging, offline data and keeping it in sync, and a basic understanding of some Generics. I tried to keep all the Realm functionality in a class that used generics so I could call them for different object types and save them or load them without being specific on the object. I'm going to have a bit of a problem with this when I get into multiple Realm files as we need to pull some data out into it's own file for other reasons. But threading was also a big thing as all writes to Realm have to be on the same thread. I did an OK job with this, but I want to go back and rewrite a bunch of it to be more thread safe then what I have it.

Over the next year, we will be doing a huge rewrite of our main application out of Xamarin and into iOS/Swift and Android/Kotlin. I'm so excited for this and want to implement a number of things to make this much better. I want to do more protocols, I want to do more generics, and I want to do more with tests. This will be an exciting project and I can't wait to get started.

I'm also going to note that I've been playing loads with SwiftUI in iOS and I really love how that works. It's quick, clean, and really simple to get started with. But I need work on how to move from some MVC to more of an MVVM architecture. Doing more advanced architecure is something I need to do more and learn more around.

With all of this, I've learned a ton. I've done much better with OOP, iOS/Swift, and basic understanding of mobile development and life cycle of an application. I've been slowly going through books to try and improve myself with more Swift by getting Pro Swift, Testing Swift, Hacking with SwiftUI Edition, and Server Side Swift with Vapor all from <a href="https://www.hackingwithswift.com" target="blank">Hacking with Swift</a>. These are really great books and I would 100% recommend them to anyone who wants to improve their Swift skills. <a href="https://www.bignerdranch.com/books/" target="blank">The Big Nerd Ranch</a> also has some great books that I've used over the last year as additional materials for studying Swift and iOS development.

### 2. DevOps is not dead.

I've also really tried to keep up my DevOps skills. But I've been focused on doing this around a mobile application. I have been trying to learn <a href="https://fastlane.tools" target="blank">Fastlane</a> for automating our builds for both iOS and Android. I've been wanting to get into <a href="https://circleci.com" target="blank">Circle CI</a> as well but I haven't gotten that far yet. I want to setup a pipeline that takes a pull request and tests it through automated test that we have in BitBucket before it allows it to be merged into the main branch. I've seen this done in GitHub, but I've not done it. Making this and also automating the provisioning profile/certificate generation process is a goal over the next couple of months.

I've also tried to keep playing with other things like Ansible and keeping up with AWS and the many releases/changes they have done. I've been super interested in all the stuff NetApp has done with their ONTAP platform and getting NetApp to work in AWS, Azure, and Google Cloud. I know I haven't done as much with NetApp over the last few years and that is 100% on me. My transition from infrastructure to developer has taken me away from some of the stuff that I enjoyed doing. But as I become more comfortable in what I'm currently doing at work I'm going to take my free time to dig back into things like Jenkins, Chef, Ansible, NetApp, and Cloud.

### 3. I have a life?

It isn't a super secret, but I've been struggling over the last couple of years with increased Anxiety, I've had some panic attacks, and these crazy waves of depression that crop up every now and again. It's not something I talk about a ton, but I've mentioned it before and wanted to touch on it again. So I wanted to talk about how I'm handling it over the last year. Short description is some days I feel like I'm king of the world and other days I'm hanging by a thread.

Trying to fight your own mind is hard. There isn't an "easy win" or quick way to drag yourself out of that darkness and to some (myself included) that darkness is a safe haven. It was a place that as miserable as I felt I also feel comfortable. This isn't a good thing, and something my friends and family do point out to me when they see it happening. I've become good at hiding it, and keeping myself hidden.

This has also disconnected me from a lot of social circles that I've been a part of and a proud member of. I haven't done any NetApp A-Team posts or events because of this. I stopped applying to the Cisco Champions groups that I really enjoyed. I didn't even try and do anymore Veeam stuff for the Veeam Vanguard which I was so honored to be a part of, but then didn't participate in as much as I should have. Going through this process has really cut me off from people that I respected, people I looked up to, people and events that I <b>REALLY</b> enjoyed going to. Even moving into being an iOS developer which was a goal I've had for years, has pushed me farther away from these groups and I'm coming to see that these groups were what helped keep me grounded before and were ways that I could help mitigate my anxiety issues.

I have been seeing someone to help me manage my issues, but it's a daily struggle to be honest. So, if anyone here reads this and then sees me and I'm not acting myself just know I'm not doing it on purpose or anything. I don't intend to act strange or remove myself at all. I find that small things can really throw me, and I am trying my best.

### Next Years Goals

Over the next year, I'm going to try and do better at being involved. I'm going to try and do more blogging, either about my personal life/mental state or more technical posts about things I'm working on. So be prepared for that.

I'm also going to be posting things as I learn them about Swift, but I have a goal to get good with at least a couple more languages. I'm thinking Python and then Kotlin as well. I don't really want to get into Android development myself, but I love certifications so I may go and sit for the Google Android certification.

I also wanted to get back into DevOps posts. I want to build out cool stuff and maybe help people along the way. I feel like I have a really unique prospective on things being as I've done 10 years of infrastructure and have now transitioned into a developer position and am expanding that role to do different types of development. I want to bring that prospective into my posts and help really bridge that DevOps gap from both side.

I'm also going to read some cool books. I have Cracking the Coding Interview, and I want to get The Unicorn Project by Gene Kim. I've read The Phoenix Project and loved it, this is from the developer side of things and should be a great read.

I think I've ranted on enough. I've got loads to think about, even more action items to work on, and a big year ahead of me doing some really cool things that I hope to share. I hope that I can keep this up and that people will be seeing more of me over the next year. I want to get back into the communities. I feel giving back helps give meaning to all I've been learning. Stop by and say hi, hit me up on <a href="https://twitter.com/sockeyes51" target="blank">Twitter</a>, on <a href="https://www.instagram.com/jesse.c.anderson/" target="blank">Instagram</a>, or on <a href="https://www.linkedin.com/in/jessecanderson/" target="blank">LinkedIn</a> and say hello. I've been active on Instagram lately, pictures are much easier then blog posts.

Also, thinking of doing a podcast? IDK. I'm already biting off a TON here for the next year with personal goals, learning, and I have a list of conferences I would LOVE to attend. So that might/might not happen but I will let you all know.

Thank you all for the amazing year, and for staying up with me. I hope this breaks my silence and I can work up the nerve to keep these posts coming. I hope everyone has a great holiday and looking forward to ROCKING out the next year!

I'm still here...
Jesse
