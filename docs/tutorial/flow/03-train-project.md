---
layout: default
title: Debug Dialog Flow Diagram
parent: Developer's guide
nav_order: 7
---

# Debug Dialog Flow Diagram
{: .no_toc .header }
---

This tutorial will guide you through debugging the completed dialog flow diagram.

## Select dialog flow graph for debugging

Click to enter the project to be debugged, select the dialog flow diagram to be debugged in the dialog flow diagram on the left, click the debug run in the upper right corner, and then select to debug the current dialog flow diagram, debug all dialog flow diagrams of the current project, and combine them according to the needs from the pop-up box Dialog flow diagram for debugging. Here we select the current module. Note: The more dialog flow graphs you select, the longer it takes to debug. It is recommended that you select only the necessary dialog flow graphs for debugging.
![00-debug-train](/assets/images/tutorial/flow/train/00-debug-train.png)

## In training

When the debugging module is selected, the training progress box will pop up automatically to show the training progress. At this time, users can jump to other pages for operation, or stay here to wait for the completion of training.

![04-debug-training](/assets/images/tutorial/flow/train/04-debug-training.png)

## Cancel Training

Select the dialog flow graph being trained from the left side (the dialog flow graph being debugged and run **Debugging and run** button will prompt 'Debugging and running'), click the small robot icon called at the bottom right (it cannot be clicked when the selected dialog flow graph is not in training), and then you can see the current dialog flow graph.
In training status, click **OK to cancel** to cancel the current training task.

![04-debug-training](/assets/images/tutorial/flow/train/04-debug-training.png)
## Training completed

As shown in the figure, the robot chat window will pop up automatically after the training.

![05-edit-option](/assets/images/tutorial/flow/train/05-debug-train-finish.png)

## Validation results

As shown in the figure, enter the chat information in the robot dialog window to verify whether the robot replies as expected.
What we verify here is that the user asks whether the fruit price can correctly obtain the fruit price information from the webhook, and the result meets the expectation.

![12-create-webhook](/assets/images/tutorial/flow/train/06-debug-train-confirm.png)

