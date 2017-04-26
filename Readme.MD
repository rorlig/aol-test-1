#### Task

This task mostly focus on how application is secured(server and web server),
how it's setup,how easily it can be scaled to 100 more servers. As this task is very open ended task, we would like to see how Developers solves this in creative way.

##### Approaches
+ AWS Lambda
  + You basically create one line of code and deploy the package to AWS.
  + AWS Lambda's managed container system takes care of the entire scaling of servers, containers and container reuse.

+ Docker Based (Approach Used Here)
  + Nginx - load balancer to redirect traffic between nodes
  + NodeJS - web servers
  + Docker-Compose packages nginx package + web server together.
  + Issues with the approach for scaling to 100 odd web servers
    + Automatic configuration of NodeJS instances to the NGINX loadbalancer
    + Single loadbalancer instance is point of failure
  + Possible solutions
    + Use a container management solution such as Kubernetes or Amazon ECS or docker swarm
    + Kubernetes e.g. creates kubs & services and exposes them its own loadbalancer
      + Obvious downside is that you are dependent on a tech stack especially with ECS.


  + Vagrant Based Solution
    + Create NGINX and NodeJs Vagrant Machines and manage the deployment and creation of the Machines via vagrantfiles and ansible scripts

  + AWS Specific
    + Create and maintain web amis.
    + Manage the deployment via ansible or other third party tools.
    + Use ELB and Autoscale groups to manage the scaling of web servers.
  
