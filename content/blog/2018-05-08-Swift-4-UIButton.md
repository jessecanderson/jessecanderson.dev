+++
title = "Let us build a button"
date = "2018-05-08T21:27:15-04:00"

#
# description is optional
#
# description = "An optional description for SEO. If not provided, an automatically created summary will be used."

tags = [ 'code', 'ios', 'learning' ]
+++

Creating buttons in Xcode is pretty simple. You go into interface builder, you select the button, you drag it over and drop it into the storyboard, and then you connect it to the ViewController as an Outlet or an IBAction. Not a lot to it right? Well, what if you need to make a button but don't want to use the Main.Storyboard?

It's actually pretty simple to add a button into your app by creating one and either dropping in into your UIView or adding it to a StackView. Let us take a look at how.

First, create your button. To do this, you will create a new constant and assign it as a UIButton.

<pre><code data-trim class="Swift">
let customButton = UIButton(type: .custom)

// If you know exactly how big and where you want your button you could add it and declare the variables right at the start.
let customButton = UIButton(frame: CGRect(x: 71, y: 565, width: 232, height: 75))
</code></pre>

Looking at the code above, you declare your constant using the "let" keyword. Then you assign it a button using the UIButton class and give it a specific type. The type specify's a style for the button. These are pre-existing styles but if you want to run with your own style you can select "custom".

Now that you have a button, you can change some of the attributes right in code.

<pre><code data-trim class="Swift">
// Give your button a custom image or look.
customButton.setImage("string", for: "state")

// This sets the button to respond to a controlEvent such as a touchUpInside event. Your action would be a function to execute when the button is pressed.

// The action should be formatted as action: #selector(funcitonName)
customButton.addTarget(target, action: , for: controlEvents)
</code></pre>

Now that you have your custom button looking good, and pointing to a function to run. We need to size it. This threw me, but we can manipulate the constraints for the button inside the code. We first create the constraints for the button and then add them to an array assigned to the button.

<pre><code data-trim class="Swift">
// Here I set the height for my button.
let heightConstraint = customButton.heightAnchor.constraint(equalToConstant: 40)

// Here I set the width for my button.
let widthConstraint = customButton.widthAnchor.constraint(equalToConstant: 125)

// And here, I add the two constraints to my button. The constraints won't work until they are assigned to the button using the addConstraints method.
customButton.addConstraints([heightConstraint, widthConstraint])
</code></pre>

There are loads more constraints to pick and assign, that could be a whole blog post by itself. But when you create them, you just have to make sure they all get added to the array and passed to the .addConstraints method. You could also assign them all to an array before and just pass that array into the method to assign the constraints. Up to you and how you want to write the code.

Ok, all this is well and good but how do we actually add the button? If you want to add it to the current view you can add it using something like:

<pre><code data-trim class="Swift">
self.view.addSubView(customButton)
</code></pre>

Depending on how you created the button above, this would then drop the button in with the constraints assigned. You could have added in additional constraints that would place the button correctly and keep it sized appropriately.

Also, if your using a stack view and have it set as an IBOutlet to reference then you could just drop it right into the stack view.

<pre><code data-trim class="Swift">
stackView.addArrangedSubview(customButton)
</code></pre>

This drops your button right into the stack view, so just double check your constraints before you throw it in there or it may knock things a little weird.

Ok, this wasn't to deep, but I hope it helps a bit with how to create a button and a few options when dropping it in programmatically. I will do another post on constraints programmatically later and then dive deeper into the UIButton options and how to place and work with them.
