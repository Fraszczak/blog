---
title: Angular Dependency Injection. Part 1
author: rs
publishDate: 2023-04-03
slug: 2023-04-03-by-rSzczuka
description: Everything you wanted to know about Dependency Injection in Angular. Most of us associate DI in Angular only with passing services in class constructors (components, directives, pipes or other services). In fact, this mechanism is much more, it gives us great opportunities.
coverImage: /images/posts/dependency-injection/dep-i-header-en-1.png
---

### What's all this fuss about?

Everyone has heard of it, but unfortunately not everyone knows how to effectively use this mechanism, which is, after all, a fundamental component of the framework.
The sad reality is this: developers are lazy. From my experience, I know that hardly any programmer I met on my way used **DI (Dependency Injection)** consciously in a slightly more advanced way than what everyone who writes web applications in Angular is forced to do.

Most of us associate DI in Angular only with passing services in class constructors (components, directives, pipes or other services). In fact, this mechanism is much more, it gives great opportunities. But you also have to remember that, as the classic used to say:

> _programmer! (…) with great power comes great responsibility!_.

It is no different in this case 😊

This text will be the first in a series devoted to Dependency Injection. The topic is actually quite 'abstract', it requires effort and leaving the comfort zone. But as a reward, apart from satisfaction, we will receive a powerful weapon, giving us at least +10 to dexterity and cleverness in solving more or less complex ideas of a nasty business client.

### But let's start from the beginning. Design Patterns!

Before we completely immerse ourselves in the world of DI, we must first take a step back and explain what the so-called. **Design Patterns**. Why? Well, because Dependency Injection is a form of one of the patterns (**IoC** – Inversion of Control).

Stay a while and listen ...

Once upon a time, a group of quite savvy programmers sat down (probably over a beer) and came to some conclusions. I imagine their conversation might have gone something like this:

> programmer1: "Damn, how many times have I implemented my class from scratch, but you know, the one that only needs to be created once in the program. One instance. Until I created my own library for this."
>
> programmer2: "Yeah? Me too."
>
> programmer3: "So am I!"
>
> programmer4: "Happened to me too. Hey, let's take similar cases, because not only this pattern repeats itself. Let's write them down. We'll write a book!"
>
> programmers together: "yayyyy!"

Of course, exactly **THIS WOULD NOT LOOK LIKE THAT**, but you know what I mean 😊 From more or less such needs, design patterns were born.

#### What are Design Patterns

These are generally schemes for solving quite complex problems - which at the same time quite often appear when writing code. Regardless of whether we write a program for technical devices, a web application, or we work in game development. Many of the problems developers face are repetitive.

So why reinvent the wheel every time?

In 1994, the book "Design Patterns: Elements of Reusable Object-Oriented Software" was published, which greatly popularized this concept. It contains many characterized patterns and ways to implement them.

<img src="/images/posts/dependency-injection/design_patterns_book.jpg" height="50%" width="50%" style="margin: auto">

Each of these patterns is well tested, proven and optimized.

### Inversion of Control

![Design patterns cloud](/images/posts/dependency-injection/patterns_cloud.png "Design patterns cloud")

If I show you such a word cloud, some of them will certainly seem familiar to you. These are the names of some of the patterns. Singleton, Memento or Facade – these names are familiar to most programmers.

In the middle there is a mysterious abbreviation: **IoC – Inversion of Control**. It's worth looking into because this guy is the basis of our topic of interest.

When implementing the **IoC** pattern in our program, framework or application, we assume that we give some _responsibility_ to certain code mechanisms. As programmers, we shed some of our responsibilities, focusing on the things that interest us the most.

I purposely don't want to go into the technical definitions of this pattern, that's not the point here. I just want us to catch the waves together, to have some insight into the subject.

Coming back to IoC - we decided to give our program some of the responsibilities. From now on, let's say we don't have to explicitly instantiate our classes! In fact, we also want the framework to create instances of these dependencies for us and "pass" these living classes directly to the place we indicate to it.

And this is more or less the description of **Dependency Injection** 😊

Therefore, we say that **DI** is a form of **IoC**. We give part of the control to our (in this case) framework (Angular) so that it independently (using appropriate clever algorithms and objects) creates new instances of the classes we wrote and transfers them to the places we showed with our finger.

DI describes how objects depend on others, and implements these relationships. We only write our components and services (**WHAT**) and show where we need them (**WHERE**).

### What & Where

Two simple words that I think fit DI very well. Because in the end, that's what it really comes down to. Wanna example?

We write an implementation of some business logic. We are smart programmers, so we make some assumptions - we don't want to keep our business logic in (purely presentation) components, because we do not want to mix responsibility.

Therefore, we have written a website that will contain the implementation of our business logic. The website and the code it implements are so universal that we are able to use it in many components.

We can visualize it like this:
![Service and components](/images/posts/dependency-injection/what_where_1.png "Service and components")

Now - we would like all our components to benefit from this service. In this case, we want all components to share one and the same service instance. With the same state and data. So we are interested in the following situation:
![Service as a dependency](/images/posts/dependency-injection/what_where_2.png "Service as a dependency")

In the code, we can map the presented schemes as below.

Service:

```ts
import { Injectable } from "@angular/core";

@Injectable()
export class MyService {
  someBusinessLogic(): void {
    //...important business logic here
  }
}
```

And components (all of them almost identical):

```ts
import { Component } from "@angular/core";
import { MyService } from "./my.service";

@Component({
  selector: "app-a",
  template: `<p>Component A</p>`,
})
export class AComponent {
  constructor(private myService: MyService) {}

  funnyMethod(): void {
    this.myService.someBusinessLogic();
  }
}
```

We wrote **WHAT** (service). We indicated **WHERE** (components). There remains the last element that we must always keep in mind in the case of Dependency Injection. Namely, ominous-sounding **'providers'**.

### Provide

In order for the framework to do all the _"magic"_ for us, the developer has to do 3 things. The above-mentioned **WHAT** and **WHERE** and we need to indicate with our finger where the framework is to create an _instance_ of dependencies (classes, in our case it is **MyService**). This is important because without it the application will not compile at all! And the console will throw a dangerous error `NullInjectorError…`.
![Null Injector Error](/images/posts/dependency-injection/null_injector.png "Null Injector Error")

#### Tree of life

Before I show directly examples of how we can "satisfy" the requirements of a whining framework, it is worth recalling (I hope!) one issue. Our application is a tree. Of course not the real one 😊

Each application, no matter what framework it would be written in (or vanilla js), has a tree structure. It always has a beginning, then some initial `node` which has children, which in turn have their `nodes` and so on... We are always based on the DOM tree.

This is so important in the context of our topic today that a lot depends on where in this 'tree' we "provide" our dependence. At the moment we are interested in getting rid of this damn `NullInjectorError` 😊

So let's look at an example, simplified diagram of any application:
![Application tree](/images/posts/dependency-injection/app_tree.png "Application tree")

As we can see, our application has a beginning - `Root` from which our next components _"come"_. These, in turn, are parents for subsequent components.

In addition to the mentioned **WHAT** and **WHERE**, as I mentioned, we still need to indicate where our dependency is to be _"brought to life"_ and _"broadcast"_ down the tree. For those of you with some experience writing in React, React's ContextProvider certainly came to mind. And you're actually not far wrong! I personally like this analogy too. The only difference is that when writing in React, we literally put `<Context.Provider>` in our application tree, whereas in Angular we have to use some imagination to visualize where in the component tree our sample service will be created and advertised.

Looking at the application tree diagram above, we can see an example service that has been _"provided"_ in 3 different places - in the `Root` of the application (at its very beginning), and in 2 components (`ShopComp` and `DeliveryComp`).

If `ShopComp` would like to use a given service which it also advertises – it can do so. An instance of this has been created in this component. What's more - all children of this component can also use this service by injecting this dependency in the constructor.

The compilation error with `NullInjectorError` is because we didn't show where our service should be _"provided"_. At the moment, we can solve it quite simply by providing one line of code in the service configuration:

```ts
@Injectable({ providedIn: "root" })
export class MyService {}
```

Passing the `providedIn: 'root'` property to the decorator will do what you should have already guessed:
![Application Root](/images/posts/dependency-injection/app_root.png "Application Root")

Yes! From that moment on, our service is _"broadcasted"_ from the very root of the application to its farthest corners. We just did something like Singleton (but with a big asterisk - more on that another time!). The framework created an instance of the class in the root of the application, and thus no matter where we _"inject"_ (pass it to the constructor) this service, we will receive a reference to exactly this instance.

The **Dependency Injection** mechanism allows for a few more ways to determine the place where the selected service will be advertised. But we'll talk about that in part two. **Stay tuned!** 😊

### Injector

For today, we still have a brief overview of the topic that you have certainly met, and if not, someday you will meet.

**Injector** - this is actually a piece of code. Clever code. The code that is responsible for most of the "magic" of the whole mechanism.

We can imagine that this is a guy who _"walks"_ around our application. While compiling, our **Injector** goes astray, it hits a component that sees in the constructor that the developer needs to pass some dependencies in that place. Following the previous example:

```ts
export class ComponentA {
  constructor(private myService: MyService) {}
}
```

Injector is so clever that it treats the typescript type simultaneously as **TOKEN** / **ID** / **KEY**, by which it will identify our dependency/service. Having an _"injection"_ place in the constructor, and having a **TOKEN** in the form of the name of the service class, the Injector begins a journey through the successive levels of the hierarchy in the application, looking for a place that our service _"provides"_ (provide). When it finds this place, it passes the reference of the service instance with our component. Everybody is happy!

We can visualize it (again, of course - a simplified way!) something like this:
![Injector](/images/posts/dependency-injection/injector.png "Injector")

Suppose **Component B** needs **MyService**. Let's follow what happens when our application compiles:

- Injector _"roaming"_ our application comes across **Component B**
- Injector sees that in the constructor of **Component B** there is some service named **MyService**
- Injector _"asks"_ our component: _"Component B, I see you need **MyService**. Are you providing this service?”_
- **Component B** answers: _„No, I'm not”_
- Injector: _"Okay, I'll see if your parent has that service in their table of providers, wait a minute_
- The injector _"goes"_ to the parent, which is **Component A**. It asks: _"**Component A**, your child needs **MySerwice**, are you providing it?"_
- **Component A**: _"Not at all!, keep looking"_
- Injector: _"I'm going to **Root** then. I check if the service is provided there. It turns out that there is a **TOKEN** named **MyService** in the application's root registry. Yeah, I'm back to **Component B** with some good news!”_

Thus, **Component B** received a reference to the website that was created in the Root of the application, we did not get an error 😊

Just note that Injector starts its journey from **Component B** and goes **ONLY** up the application tree. Never down. This is quite important and worth remembering.

If during its journey, the Injector did not find a TOKEN in providers on this path, unfortunately, we would receive the already known `NullInjectorError`.

### Summary

For today only (or as much!) That's it. We learned the basics, laid the foundations for future more advanced constructions and ways to use the **DI** mechanism. We learned what Dependency Injection itself is. We have described the basics and ideas behind it.

We also know roughly how to deal with the unfortunate `NullInjectorError` 😊 (providedIn: 'root'!). But that's not the only way. DI gives us much more possibilities.

Personally, I want you to be able to find a starting point for further learning after reading this article. I remember my difficult beginnings and the struggle with matter when it comes to **DI**. The Angular documentation at the time did not make things any easier 😊 (although the Angular Core Team is working hard on improving it!).

See you in the next part!
