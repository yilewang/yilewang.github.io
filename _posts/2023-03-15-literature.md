---
layout: post
title: 文献分享：Inferring multi-scale neural mechanisms with brain network modeling
author: Wayne
date: 2023-03-15
permalink: /posts/03/15/2023/literature
description: Literature sharing

---
# 文献分享：Inferring multi-scale neural mechanisms with brain network modeling

公众号好久没更新，这个学期三门课，真的把人上傻了。读博第一建议，别上太多课…

今天分享一篇关于用hybrid modeling做fMRI信号拟合的文章。这个文章和我之前的一个想要用模型模拟empirical fMRI signal的想法非常类似，这里做一个中文解读和大家分享一下。
![Pasted Graphic](https://user-images.githubusercontent.com/37648360/225517055-7448272d-2317-4565-9359-acca5237c70a.png)


文章标题为inferring multi-scale neural mechanisms with brain network modeling，是2018年发表在eLIFE上文章，作者来自TheVirtualBrain 团队以及Charit  ́ e – Universita ̈ tsmedizin Berlin （柏林夏洛特医学院）的Brain Simulation Group。

小总结：
这篇文章算是一篇工程+科学问题并行的文章。论文的前一部分讲的是他们基于Deco et al., 2014 和 Wong, Wang, 2006 的Reduced Wong Wang model，对这个dynamical model的参数项进行了一个修改，从而达到了他们的simulated fMRI 和个体empirical fMRI 有较好的拟合；论文第二部分在讨论他们新的dynamic model成功的帮助我们理解和揭示了大脑中的alpha频率活动和 fMRI信号中的振幅（amplitude）的负相关关系。

具体内容：
Introduction

文章的标题起的很大，但是其实他们关注的是一个很具体的问题。计算神经科学家一直期望能用数学模型和统计来reverse engineering （逆向工程）大脑，其中Brain Simulation（脑模拟）是一个非常重要的手段，因为我们可以通过对于模型中的参数来理解大脑工作的潜在的机制。目前Brain Network Model (脑网络模型）被广泛运用在脑模拟研究中。脑网络模型可以被理解为一个dynamical systems （动力学系统），在这个动力学系统中耦合neural mass models，所以我们就可以模拟以时间为尺度的大脑活动。这篇文章的新意就在于，他们对于这个脑网络模型进行了一些修改，引入了EEG data 来驱动neural mass dynamics。具体的方法我们会在Method部分介绍。这个引入的eeg data 被当作是一个excitatory synaptic input currents （EPSC，兴奋突触电流）的一个估计。这个脑网络模型被他们称为“hybrid model”，其中三个重要的成分是：1. Structural connectivity data； 2. Neural mass model； 3. EEG data。在TheVirtualBrain （虚拟脑）平台使用的脑网络模型中，一般只会使用前两个成分，所以这篇文章其实是在TheVirtualBrain基础上的一个创新。脑网络模型可以帮助我们更好的去揭示神经元群的网络交互，以及这种交互是怎么作为神经机制，去解释一些神经科学实验中的经典现象。

利用这个新的 hybrid model，篇文章讨论了一个在神经科学中的经典科学问题：神经活动中的alpha 波和neural firing rate（神经放电率）的inverse relationship （反相关）。在先前猴子和老鼠的实验中，研究者发现neuron firing （神经元放电）和alpha波的相位存在一种反相关的关系，这种反相关不仅仅存在于短时的神经元放电，在更长时间尺度中的人类fMRI实验也存在。但是目前对于这个现象一直缺乏机制上的解释。通过利用这个hybrid model，研究者可以尝试在多个时间尺度上回答这个问题（其实就是长和短，快和慢）。

总结一下，这个文章的思路其实是尝试回答三个问题：
	0.	加入EEG data是怎么去驱动个体层面fMRI signal的拟合？
	0.	EEG data里的alpha波是怎么去影响fMRI oscillation（震荡）的？
	0.	更进一步，alpha波的这种inhibitory effect （抑制效应）是怎么在更长的时间尺度上影响fMRI 震荡的？

可以说是环环相扣，最后讲了一个完整的故事。

Method
文章的总体框架如图1所示：研究者用了diffusion MRI 作为模型的long-range coupling 参数（用来描述脑区间的耦合），然后T1 MRI作为parcellation template（脑区分割），EEG作为模型的EPSC参数。脑网络模型的的输出是excitatory synaptic activity（兴奋突触活动），然后再借用Balloon-Windkessel hemodynamic model，可以将神经元群层面的活动转换为fMRI signal，我们称之为simulated fMRI。然后empirical fMRI和simulated fMRI做相关来进行fine-tuning，我们就能得到最终最优的模型。
![Pasted Graphic 2](https://user-images.githubusercontent.com/37648360/225517096-12b1cb19-7927-456a-9019-4e0c077b07c9.png)

图1. 计算框架。

这里值得一提的还有他们对于脑网络模型的修改。在原始的模型中 $w_{BG}^{(E, I)} I_{BG}$ 项的参数原本只是比较传统的 $I_{external}$，不过他们把这一项替换成了EEG data。相比较原始模型，他们还去除了$J_{NMDA}$项（local feedback inhibitory weight）。这里我就不过多展开。


![Pasted Graphic 1](https://user-images.githubusercontent.com/37648360/225517110-6c222faa-a6ea-4a35-b43a-2f94e0250605.png)


图2. 文章中的hybrid model


![IMG_0010](https://user-images.githubusercontent.com/37648360/225517124-7e8d7e98-9ec4-45a5-b9b5-92001ca98e23.PNG)

图3. 我对文章中数学的一些标注，方便大家理解 

![Screenshot 2023-03-15 at 8 58 25 PM](https://user-images.githubusercontent.com/37648360/225517137-ae4e019f-71ef-4047-9f14-4eaeea69d05c.png)


图4. 原始模型（from Deco et al., 2014)

这里我就不过多展开数学的细节了，我也附上了模型中参数解释的截图。感兴趣的朋友们欢迎留言讨论。

Results
最后来说一下结果。文章的结果还是很有意思的，我尽量用精简的语言介绍一下。在图五中，从左到右代表的是不同的实验研究中发现的alpha波与神经元活动的负相关现象。第一行是这个研究中他们复现的结果，第二行是之前别的研究者的实验结果。他们发现，hybrid model很好的复现了实验中的结果。这个部分的结果可以说明他们的模型是有效的。
![Pasted Graphic 3](https://user-images.githubusercontent.com/37648360/225517285-90a44b27-3889-4b71-97dd-f8622181c5d1.png)

图5. upper row由是hybrid model计算从而复现的结果。lower row是之前的研究中发现的现象。我们可以看到，hybrid model非常好的复现了之前文章中在实验里发现的结果。a, alpha波的相位和神经元激活的反相关；b, alpha波和EPSC是正相关和IPSC（抑制突触电流）是负相关关系；c, alpha波增强，神经元放电率降低；d, alpha波能量和fMRI信号也呈现负相关关系；e, fMRI的能量频谱分布呈现一个scale free的趋势。

图6图7还是在说明hybrid model的有效性。在和各个脑区以及平均time series做了相关之后，他们发现hybrid model的拟合和empirical fMRI是最好的。这里值得注意的是，alpha-regressor指的是用传统的hemodynamic response function去卷积EEG data得到的time series；permutations是指把EEG信号打乱放入模型中，但是其他不变；noise model指的就是比较传统的脑网络模型做法，通过噪声来驱动。后面的三个模型都是这篇文章的control models，用来和他们的hybrid model做比较。
![Pasted Graphic 4](https://user-images.githubusercontent.com/37648360/225517299-9337903d-4f4f-4dbb-9849-2d0de0156eb3.png)

图6. 最上面是20mins的fMRI信号和4个不同模型的比较；中间是在不同的脑区做静态的时间序列的相关；最后一行是加时间窗来算相关。
![Pasted Graphic 5](https://user-images.githubusercontent.com/37648360/225517328-5f1ad9c5-d42b-4213-97b8-1fab311cbef9.png)

图7. 做functional connectivity（功能连接）的相关。

总结一下， 上面的4个结果图都还是在说明在工程上为什么这个模型非常优秀。接下来的三张图将要具体说明alpha波和神经元活动反相关的具体机制探究。

在图8中，他们具体介绍了一下注入EEG活动到模型中是怎么影响突触活动的。首先如果你还记得method部分的数学模型，你可以知道，这个中间黑色的source activity就是EEG活动；绿色的线是long-range input，是模型中global coupling（全局耦合）的参数影响生成的活动。红色是EPSC，然后蓝色是IPSC。我们可以看到注入的EEG在模型中其实就是直接被当成了EPSC，很自然的IPSC就变成了和alpha波成anti-phase（负相位）了。因为就像油门和刹车一样，不可能神经元一直在踩油门。IPSC的抑制作用就是通过和EPSC反相位来实现。
具体来解释一下这个过程：EPSC会在一开始主导inhibitory firing rate和synaptic gating的趋势，但是因为这里存在一个feedback inhibition loop（反溃抑制环路），所以EPSC越强，IPSC也越强，所以IPSC会呈现完全的反相位。但是，如果我们仔细看IPSC的振幅，我们会发现IPSC其实是比EPSC大得多的，所以会出现一个现象就是synaptic firing rate最终的形状是IPSC的形状。这个效应在以往的实验中也得到了证实。
![Pasted Graphic 6](https://user-images.githubusercontent.com/37648360/225517373-4087714a-d472-4b34-8f09-b410eb6f6cc3.png)

图8. 在神经元活动的层面，alpha波是如何影响EPSC和IPSC的。

在长时间尺度，比如fMRI上，alpha波又是怎么影响fMRI 震荡的呢？图9的a这里他们做了类似的in-silicon的实验，不过这个时候他们吧EEG alpha波替代位了人工生成的，稳定10hz的alpha波，他们发现了与之前相似的效应：fMRI signal呈现了反相关的趋势；在b的实验中，他们把人工生成的alpha波换成了更复杂的情况：在一开始的时候alpha信号是slow component（因为需要更长的时间去完成一个cycle），然后切换到fast comonent（oscillation更频繁）。他们发现在fMRI的振幅上，当alpha是slow component的时候，fMRI的振幅比在fast component的时候要高，这个也非常符合反相关的现象。
![Pasted Graphic 7](https://user-images.githubusercontent.com/37648360/225517404-ac8dd787-c9e7-490b-9580-53aa7756ae7c.png)

图9. 人工模拟的alpha波对fMRI signal的影响

文章的最后，他们还讨论了long-range input对于alpha波对fMRI信号的影响。他们发现，如果去除模型中long-range input，fMRI的振幅将不再有区别。这个直接说明了long-range input对于alpha波的影响。这里潜在的机制是，因为long-range 激活有着更慢的decay rate（衰减率），所以long-range的兴奋能让slow component的活动有更长的时间去积累兴奋信号，然后产生更强的oscillation；相反，fast component没有足够的时间去积累，所以导致振幅低于slow component时候的活动。

![Pasted Graphic 8](https://user-images.githubusercontent.com/37648360/225517417-261cd39e-a292-4253-8213-8c56b4bf98d1.png)

图10. long-range input对于fMRI oscillation的影响

文章中还讨论了power law distribution在fMRI和频率之间的关系，但是我觉得这里的结果可能有误，因为他们并没有用loglog plot来展示结果，所以可能最终的趋势并不是power law。这个也是这个研究的一个小问题所在。

Comments:

总而言之，这是一篇非常精彩的文章，文章的逻辑很清晰，对于工程和科学问题的回答都非常好。他们的hybrid模型很好的回答了alpha波和神经元活动负相关的问题，诠释的也很清晰。我之前在工程方面有和这篇文章类似的想法，比如对脑网络模型的来进行gradient descent来算出最优的参数，让我可以尽可能的拟合empirical fMRI。这个模型差不多用了不同的方法回答了这个问题。文章也让我们了解了更多关于fMRI和EEG之间的关系。希望这篇文章的解读对大家理解这个模型有帮助～

03.15.2023

Yile
