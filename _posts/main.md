
# The Problem of Generalization

How do generative models generalize? For example, if every image contains 2 objects, will generative models generate images with 1 or 3 objects?

![example_count](img/example_count.png)

If the training image has red/blue cars but only red buses, will generative models generate blue buses. 

![example_car](img/example_car.png)

These questions are extremely difficult to answer. In fact, it is not even clear what is "good" generalization. For example, should a model generate exotic combinations such as black swan or black snow. If they shouldn't, how do we decide which combinations are exotic and which are not? These questions seem to fundamentally lack a clear-cut correct answer. 

![example_swan](img/example_swan.png)

One could, of course, argue that log likelihood (on the test set) is a good evaluation metric -- or at least it seems to be the most objective and least ad-hoc. However, in addition to the noted practical short-comings of log likelihood [1], there is a deeper and more fundamental objection. 

## (One more) reason to be dissatisfied with log likelihood

When we talk about log likelihood we always assume some underlying distribution $p^*$, and we assume that we have some test examples $x^1, \cdots, x^k$ drawn i.i.d. from $p^*$. However, $x^1, \cdots, x^k$ are usually drawn from some ad-hoc distribution. For example, MNIST is collected from handwritten zipcodes from a particular population, preprocessed in a particular way, and reflects the selection bias of the people collecting the examples --- had someone else prepared this dataset, it would certainly look much different; The same can be said for CIFAR, ImageNet, and essentially every dataset that we have. When we say the training and test data $x^1, \cdots, x^k$ is drawn from $p^*$, we are actually referring to this ad-hoc distribution (conjured by the dataset collector). Good test log likelihood means that the model's generalization -- or its inductive bias -- conincide with the "inductive bias" of the dataset collection process.

 In supervised learning, the dataset covers a (ad-hoc) subset of all possible images, but if any classifier wants to classify correctly on all images, it should at least classify correctly on our dataset: these are not conflictory goals. For generative models, on the other hand, if a generative model generates a distribution that is identical to one data collection process $p^*$, it cannot be identical to another. Agreeing with two different $p^*$ is inherently conflictory. This is illustrated in the figure below. 

![example_coverage](img/illustration_coverage.png)

#In fact, this illustration far under-emphasize the magnitude of this issue. In practice, the set of possible images is huge, and not very well defined. Our data collection process, even one as comprehensive as imagenet only cover a small fraction of all possible scenes that could appear.  

# Empirical Study of Generalization

We now come back to our old question -- how do we evaluate the generalization behavior of generative models? It seems that we must resort to human evaluation as the gold standard. This is indeed a must-have evaluation method for almost every generative models paper. However, human evaluation is biased by the taste of the human viewer, and are usually determined by the amount of hardwork put into cherry picking. Is there something slightly more objective? 

Note that human evaluation also gives us much more than a cold performance number, we can also observe the type of successes and failures the model demonstrates. The rick information is also one reason why human evaluation is often preferred. We would like to have that too. 

In our paper [(ArXiv)](https://arxiv.org/abs/1811.03259) [(Reviews)](https://media.nips.cc/nipsbooks/nipspapers/paper_files/nips31/reviews/6882.html) at NeurIPS 2018 we proposed a new method to visualize the behavior of a deep generative model. 


[1] Notes on evaluation of generative models