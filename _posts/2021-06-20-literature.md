---
layout: post
title: 文献分享：Criticality in the brain: A synthesis of neurobiology, models and cognition
author: Wayne
date: 2021-06-20
permalink: /posts/06/20/2021/literature
description: Literature sharing for criticality

---

# 文献分享：Criticality in the brain: A synthesis of neurobiology, models and cognition

Hey What's up guys 

今天分享的是一篇我最近在读的，关于criticality and brain activity的文章。我会不定期在我的个人网页和微信公众号同步更新一些与computational neuroscience相关的文章。欢迎大家留言+关注。谢谢

[个人网页](https://yilewang.github.io) | 微信公众号: CyberPsy

<p align="center">
  <img src="https://user-images.githubusercontent.com/37648360/122690600-1afbd500-d1f0-11eb-819d-258d48510cbb.png" width="80%" height="80%" />
</p>


## 0. Abstract

在神经系统中，目前普遍认为认知功能的发生是一个多维度神经活动协调的过程。从单一神经元产生脉冲(spikes)，到整个神经环路的信息传导，再到大规模的网络连接，大脑这个复杂系统无时无刻不在做跨维度的计算和协调。我们该如何理解这样的复杂系统呢？目前，越来越多的研究发现大脑的多尺度(multi-scale)计算是来源于criticality 这个现象。criticality是一种广泛发生在自然界其他复杂物理系统的一种现象，一般在复杂系统处于‘有序’和‘无序’的中间状态是产生，一般表现为一种不专属于任何一种时空尺度的波动or振荡行为(fluctuations/oscillations)。这个不专属于某一时空尺度的概念，我的理解是它的产生不依赖于某一维度的活动(比如，是single neuron 还是large-scale network)。这篇综述介绍了criticality的内核，以及其在不同自然系统和大脑中的特性。


## 1. Intro

在理解大脑的时候，其中有个非常大的挑战就是，单一尺度的信息并不足够我们去解释大脑功能，毕竟人脑是一个通用智能体(general intelligence)，而并不是单一且功能割裂的。从皮层内部单一神经元的活动到最后人类行为的产生，神经元对信息的加工服从怎样的规律？这中间的integration和interaction是如何工作的呢？

去理解这些问题，从本质上其实是去理解一个高维复杂的系统是如何工作的。类似的工作在气象学和物理学界其实已经开展多年，比如，风是如何对当地气候，甚至世界天气产生影响的(厄尔尼诺现象)。在这些前人对复杂系统的研究中，criticality这个概念被用来描述系统介于‘有序’(比如水流中的laminar flow)和‘无序’(比如水流中的turbulence) 两者之间的行为。具有criticality 特征的系统，会表现出scale-free fluctuations (波动)，这种波动会自发的在不同系统状态间(有序和无序)跳跃。值得一提的是，这种critical phenomenon在不同随机系统中表现出了非常一致、结构化和符合物理世界特征的特性，这种通用性可以被用来进行后期统计建模分析。

在很多脑成像的研究中发现，neural system也有criticality的特征：在计算模型中，当系统迫近critical point时，大脑会对输入信息的加工呈现最大的适应性等等(具体可见[shew, et al. 2019] (https://www.jneurosci.org/content/32/3/1061)等类似文章)。值得注意的是，在应用criticality的概念在研究中时，研究者需要对其标准和范围有清醒认识。这篇文章提供了物理学和经典的criticality在neuroscience领域中的应用作为例子进行更好的说明。

## 2. 物理系统中的Critcality

首先，criticality的定义是，


