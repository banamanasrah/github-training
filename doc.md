Training Notes

1. Git Basics

Git is a version control system that helps developers track changes in their code, manage different versions, and work together on projects.

Important terms:

Repository: A place where project files and their history are stored.

Commit: A saved snapshot of changes.

Branch: A separate line of development where we can work without directly changing another branch.

Merge: Combines changes from different branches.

Remote repository: A repository hosted on a platform such as GitHub.

Pull Request (PR): A request to review and merge changes from one branch into another.

Common Git commands:

git init — Initializes a new repository.

git clone <url> — Copies a repository to the local machine.

git status — Shows the current state of the working directory.

git add <file> — Stages a file for the next commit.

git add . — Stages changes in the current directory.

git commit -m "message" — Saves staged changes as a commit.

git log — Shows the commit history.

git branch — Lists local branches.

git switch <branch> — Switches to another branch.

git switch -c <branch> — Creates a branch and switches to it.

git merge <branch> — Merges a branch into the current branch.

git remote -v — Shows the remote repository URLs.

git push — Uploads local commits to a remote repository.

git pull — Fetches and integrates changes from a remote branch.

Basic workflow:

Check the changes using git status.

Stage the changes using git add.

Save them using git commit.

Push the commits using git push.

Open a pull request when the changes are ready for review.

Branches allow developers to work on separate tasks. In a common workflow, main contains the stable version, develop collects ongoing work, and feature branches are created from develop. After completing a task, the developer pushes the branch and opens a pull request targeting develop.

An existing pull request updates automatically when new commits are pushed to its source branch.

2. Agile vs. Waterfall

Agile and Waterfall are methodologies used to organize software development.

Waterfall

Waterfall follows a sequential process. Each phase is generally completed before the next one begins.

Workflow: Requirements → Design → Implementation → Testing → Deployment → Maintenance

Most requirements are defined at the beginning.

The phases follow a planned sequence.

Changes can be more difficult to handle later.

It can work well when requirements are clear and stable.

Agile

Agile is an iterative approach where software is developed in smaller parts, tested, and improved using feedback.

Workflow: Planning → Development → Testing → Review → Feedback → Next iteration

Work is divided into smaller tasks or iterations.

Testing and feedback happen throughout development.

Requirements can change as the project progresses.

It encourages teamwork and continuous improvement.

The main difference is that Waterfall follows a more fixed sequence, while Agile allows the team to adapt and improve the product throughout development.

3. SOLID Principles

SOLID is a set of five principles for object-oriented programming. They help make code easier to maintain, test, and extend.

1. Single Responsibility Principle (SRP)

A class should have one main responsibility and one reason to change. For example, a class that manages employee information should not also handle sending emails. These tasks can be separated into different classes.

2. Open/Closed Principle (OCP)

Software should be open for extension but closed for modification. This means we should be able to add new functionality without constantly changing existing code. Interfaces and polymorphism can help achieve this.

3. Liskov Substitution Principle (LSP)

A subclass should be usable wherever its parent class is expected without breaking the program's behavior. The subclass must respect the behavior promised by the parent.

4. Interface Segregation Principle (ISP)

A class should not be forced to implement methods it does not need. Instead of using one large interface, we can create smaller interfaces with more specific responsibilities.

5. Dependency Inversion Principle (DIP)

High-level classes should depend on abstractions rather than concrete implementations. For example, a service can depend on a repository interface instead of directly depending on a specific database implementation.

SOLID helps reduce tight coupling and makes software easier to understand, test, and modify.

4. Design Patterns

Design patterns are reusable approaches to common software design problems. They are general solutions that can be adapted to different situations, rather than complete pieces of code that must always be copied.

There are three main categories:

Creational patterns: Focus on object creation.

Structural patterns: Focus on how classes and objects are organized.

Behavioral patterns: Focus on communication and responsibilities between objects.

Factory Pattern

The Factory pattern separates object creation from the code that uses the object. A factory decides which object to create, keeping creation logic in one place.

Builder Pattern

The Builder pattern creates complex objects step by step. It is useful when an object has many optional properties. Builder methods often return this, allowing method chaining.

Adapter Pattern

The Adapter pattern allows two incompatible interfaces to work together. The adapter acts as a bridge between the client and a class or service with a different interface.

Composite Pattern

The Composite pattern organizes objects into tree-like structures and allows individual objects and groups to be treated in a similar way. For example, a directory can contain files and other directories.

Prototype Pattern

The Prototype pattern creates new objects by copying existing ones. In Java, cloning is associated with Cloneable and clone(). Shallow copying and deep copying are important differences to understand.

Inversion of Control (IoC)

Inversion of Control is a principle where the responsibility for managing certain objects or processes is given to a framework or container.

In Spring, the IoC container creates and manages beans and their dependencies. Dependency Injection (DI) is one way to implement IoC. Instead of creating its own dependencies, a class receives them from outside, often through constructor injection.

This reduces tight coupling and makes components easier to test and maintain.

Conclusion

Git helps track changes and supports collaboration. Agile and Waterfall offer different ways to organize development. SOLID provides guidelines for better object-oriented design, while design patterns offer reusable approaches to common design problems. These concepts help developers write code that is easier to maintain and extend.