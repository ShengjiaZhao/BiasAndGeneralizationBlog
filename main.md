
# The Problem of Generalization

How do generative models generalize? For example, if every image contains 2 objects, will generative models generate images with 1 or 3 objects?

![example_count](img/example_count.png)

If the training image has red/blue cars but only red buses, will generative models generate blue buses. 

![example_car](img/example_car.png)

These questions are difficult to answer. For example, should a model generate exotic combinations such as black swan or black snow. If they shouldn't, how do we decide which combinations are exotic and which are not? These questions seem to fundamentally lack a clear-cut correct answer. 

![example_swan](img/example_swan.png)

One could, of course, argue that log likelihood (on the test set) is a good evaluation metric -- or at least it seems to be the most objective and least ad-hoc. However, in addition to the noted practical short-comings of log likelihood [1], there is a deeper and more fundamental objection. 

## (One more) reason to be dissatisfied with log likelihood

When we talk about log likelihood we always assume some underlying distribution $p^*$, and test examples $x^1, \cdots, x^k$ drawn i.i.d. from $p^*$. However,$p^*$ is usually some **ad-hoc** distribution. For example, MNIST is collected from handwritten zipcodes from a particular population and preprocessed in a particular way --- had someone else prepared this dataset, it would certainly look much different --- it is an arbitrary subset of valid handwritten digits. The same can be said for essentially every dataset. <!-- When we say the training and test data $x^1, \cdots, x^k$ is drawn from $p^*$, we are actually referring to this ad-hoc distribution (conjured by the dataset collector).  -->
Good test log likelihood means that the model's generalization -- or its inductive bias -- conincide with the dataset collection process. 

 In supervised learning this is not a big issue: if any classifier wants to classify correctly on all images, it should at least classify correctly on our dataset -- achieving simultaneous high accuracy on different datasets is not inherently conflictory. However, if a generative model generates a distribution that is identical to one data collection process $p^*$, it cannot be identical to another. Agreeing with two different $p^*$ is inherently conflictory. 
 
 But if we just look at the data samples, which data collection distribution do they come from? There are many plausible answers. This is illustrated in the figure below. There is nothing special about the data collection process that we just happen to choose. Why should our generative model produce that particular distribution? 

![example_coverage](img/illustration_coverage.png)

<!-- In fact, this illustration far under-emphasize the magnitude of this issue. In practice, the set of possible images is huge, and not very well defined. Our data collection process, even one as comprehensive as imagenet only cover a small fraction of all possible scenes that could appear.   -->

# Empirical Study of Generalization

It seems that we must resort to human evaluation as the gold standard. This is indeed a must-have evaluation method for almost every generative models paper. However, human evaluation is biased by the taste of the human viewer (and the amount of cherry picking effort). Is there something slightly more objective? 

Human evaluation also gives us much more than a cold performance number, we can also observe the type of successes and failures the model demonstrates. We would like to have that too. 

In our paper [(ArXiv)](https://arxiv.org/abs/1811.03259) [(NeurIPS 2018 Spotlight Video)](https://www.videoken.com/embed/d37VHhPILAU?tocitem=40) we proposed a new method to visualize the behavior of a deep generative model. We think about the generative model training algorithm as a function that maps input training distribution into output generated distribution. We design input training distributions to "probe" the properties of this function.

[maybe a plot of the training algorithm as a function]

However, images are high dimensional, so studying this function from training images to test images is infeasible. However, we can study this function when it is **projected** into a low dimensional feature space. We three examples of this strategy we study three problems. 

Before we present the results, we remark that most results we present here (and in the paper) are qualitatively similar for different models (GAN, VAE, Recurrent), architectures (CONV, FC), parameter counts, training set sizes, and hyper-parameters. It is impossible to include everything, but we believe that our selection is sufficient inclusive, such that these results are most likely valid for typical modern instantiations of generative models. 

## Setup 1. Input-Output Relationship of a Single Value of a Single Feature

In our first setup, all images in the training set, when projected onto a feature space, takes a single value. As an example, we use numerosity (number of objects). For example, if all images in the training set contain 3 objects, will the generated images have a different numerosity? It seems that since the model is trained a hundreds of thousands of images --- each with 3 objects --- the model should generate images with 3 objects. Actually this is not true. 

Below we interactively visualize the training images (image with 1-9 dots) and the generated images. Observe that the number of generated dots is often different from the training images. 

[Insert interactive plots]

When we plot the number of dots in the paper, we observe that the generated numerosity is roughly a log-normal shaped distribution around the training numerosity. 
<!-- ![sm](img/sm.png)  -->
<!-- ![mm](img/mm.png)
 -->

We experimented with several other features (size, location, color), and observed similar patterns: the generated feature is a normal or log-normal shaped distribution around the true feature value. This reveals the strong visual inductive bias of deep generative models. 

## Setup 2. Input-Output Relationship of Multiple Values of a Single Feature

In our second setup, the training image, when projected onto a feature space, takes multiple values. It turns out that the output distribution is very predictable: we take its output distribution for each input value separately (i.e. we studied this in setup 1), and sum them up. In other words, the learning algorithm behaves like a linear filter. 


Below we interactive visualize the training values (e.g. the input image is either 10% or 50% red colored, its distribution has two "spikes"), and the output distribution. Observe how the algorithm behaves like a linear filter. 

The exception is when the two distributions are close together (e.g. the input image is either 40% or 50% red). The generated distribution will he more concentrated around the mean (e.g. 45% red). This effect is referred to "prototype enhancement" in cognitive psychology.  

[Insert interactive plots]

## Setup 3. Combinations of Multiple Features 

Finally we study the model's behavior when there are multiple features. We ask: if we observe some but not all combinations of two features, will the model generates new features. This helps us answer questions such as "will the model generate black swans?".  

Below we visualize the input combinations (MNIST digits) compared to the output combinations. It can be observed that when there are few combinations (e.g. 10), the model does not generate much new combinations. It always perfectly memorizes. When there are more (e.g. 80), the model generates almost every combination. 

[Insert interactive plots]

We emphasize that this is almost independent of model parameter-count and training set size. In fact, deep networks should be able to memorize huge amounts of random information [2], and when we train the model to memorize by supervised training, it indeed memorizes. This means that this phenomenon relate to how generative models are learned. 

We believe that this property --- whether generative models produce novel combinations --- is particularly important and difficult to describe. Therefore, we provide [Repo] a toolbox to visualize this property, and to calculate a performance metric indicating whether the model is prone to memorization or prone to generalization. 


[1] Notes on evaluation of generative models
[2] Zhang et al 2016 