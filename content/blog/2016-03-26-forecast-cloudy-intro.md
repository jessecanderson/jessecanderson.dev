+++
title = "Forecast Cloudy Intro"
date = "2016-03-26T21:27:15-04:00"

#
# description is optional
#
# description = "An optional description for SEO. If not provided, an automatically created summary will be used."

tags = [ 'cloud' ]
+++

Since starting with iVision, I have been able to embed myself into their new cloud practice. It has exposed me to a bunch of new technologies that I didn't have an opportunity to play with before. Cloud has always been something that has interested me, especially so after Cisco announced their new cloud certification track. So this got me thinking...how do I become a better cloud engineer? In order to be a better cloud engineer, I need a deeper understanding of cloud and how it really benefits customers.

So, I am going to write a series on cloud. For this post, I'm going explore cloud services as they stand today.

What is a cloud? According to dictionary.com, a cloud is “any of several, often proprietary, parts of the Internet that allow online processing and storage of documents and data as well as electronic access to software and other resources”. What does that mean? We move our services from being self hosted to being hosted by internet accessible systems. This would eliminate the need for physical onsite servers, storage, and networking gear, as well as reduce the need of having resources that are not fully utilized. That last bit is "a huge part of this cloud thing". With cloud services you typically only pay for what you use/consume, not what you may need 5 years from now. A problem for a lot of people is proper sizing and the return on that investment. Also, cloud providers work on scale. They can grow out that environment for their customers as it is needed, and usually without a long turnaround time.

So cloud is a solution to a problem. That problem could be very different for each customer, so cloud services need to adapt to their customers needs. That is the root of what cloud is to me. A flexible option for customers to be able either replace or expand data centers as needed.

Here are a few acronyms to describe what types of cloud options there are:

- SaaS - Software as a Service - software licensing and delivery model in which software is licensed on a subscription basis and centrally hosted by the provider.
- IaaS - Infrastructure as a Service - a form of cloud that provides virtualized computing resources over the internet.
- PaaS - Platform as a Service - a category of cloud services that provides a platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining the infrastructure typically associated with developing and launching an app.
- DRaaS - Disaster Recovery as a Service - replication and hosting of physical or virtual servers by a third-party to provide failover in the event of a man-made or natural catastrophe.

So what makes up a cloud? To the end user, it’s just a service. And if it’s run right, that is all the customer needs it to be. But in reality, the cloud is full data center with network, compute, storage, virtualization, and resources (people) to run all of it.

At this point, your probably wondering how does this save me money? What are the benefits? Most companies already have some kind of DR or backup solution already, right? Why do I need a cloud?

In my experience, a lot of DR or backup solutions are afterthoughts. Not all of the them, but a lot of them. I’ve seen companies perform hardware upgrades to their primary systems, then reuse their old gear for their DR or backup solutions. While this does extend the life of the hardware/software that was replaced, it is not always the most effective DR or back solution. If a DR event were to occur, what would performance be like? Was the old gear kept up to date with the latest patches and firmware? Are there any new features that were implanted that this older hardware just will not run? Was there any application changes that would cause issues running on this “last gen” hardware? These are the inevitable questions and issues that crop up during every annual DR test. I’ve seen companies who have “DR," but also use it as production to justify the cost. This scenario is terrible in the case of an actual DR event, because the system is over utilized. To compound the issue, performance then becomes a problem while you are trying to fix whatever happened to the production environment. Yet, implementing a one to one production to DR solution is not cost effective for most companies. And the thought of buying hardware to sit and do nothing, just waiting for a failure doesn’t seem right either. Don't forget the man hours needed to keep a DR site running well. A cloud solution takes care of all this for you.

A cloud provider has resources just waiting for your data. The provider would be built out on newer hardware and there is typically a dedicated team for patching and updating, as well as assisting with the DR tests and actual DR events. This service frees the company's resources up to work on the production and high priority tasks that have been assigned to them. The cloud provider is able to offset the cost of newer hardware by focusing on the DR applications that are important to their customers and spreading the cost across a system of shared users. Clouds are built on top of a multi-tenant architecture and the underlying technologies should be transparent to everyone. It should just start up, restore, or fail over whenever the customer needs it to be there, without any performance issues. The cost of this service can be lower than buying their own gear, depending on the type of implementation.

When talking about cloud implementations, there are two “main” schools of thought. First is full cloud implementation. If the customer doesn’t want to run any infrastructure themselves, but do want to maintain their own applications, then they load all of their applications into the cloud. The cloud provider takes care of everything! The problem I see with going all cloud is the cost. Full cloud implementation is expensive, but it can be worth it for the right customer. The other option is a hybrid approach. This is a combination of on site resources and cloud services. This approach is more of the DRaaS option or a backup as a service. Or maybe a test/dev environment in the cloud based on the DR or backup configuration that is already configured.

Going full cloud implementation is a huge commitment for most customers. I don’t believe there is enough benefit in it yet to really move that direction. But, I think a hybrid approach is a great option for almost everyone. It’s a very cost effective way to do host test/dev environments, DR services, backup services, or other services to augment the main infrastructure freeing up essential resources.

I am sure there are many others views on cloud out there and many things being done that I haven’t even started to think about.

How has cloud services (any of them) helped you out? Did I miss something that you think is an important aspect of cloud services? Leave a comment below and we can talk about them!

Next, we will talk about the different components and technologies that actually get in and make up cloud. How to we achieve performance and multi-tenancy and what companies are making cloud providers lives easier?
