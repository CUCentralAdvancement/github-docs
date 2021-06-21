[<-- Home](/readme.md)

# Kanban Project Board

The DE (Digital Engagement) team manages all work via a Kanban project board. Taiichi Ohno, an industrial
engineer at Toyota, developed kanban to improve manufacturing efficiency, but many people have adopted the
same principles within software development. Theory of Constraints, sometimes called "drum-buffer-rope", is
also intertwined with the kanban concept as it applies to software development.

David J. Anderson came up with "Kanban with a capital K" while working at Microsoft in the early 2000's. A 
lot of ideas and procedures in this document were written while [reading his book](https://www.amazon.com/Goal-Process-Ongoing-Improvement-ebook/dp/B002LHRM2O/).

Work is condensed into one "project board" that lists all the tasks in one place. The board has columns, a
directional flow, and rules related to how many tasks can be in each column. It is said to be a "pull system"
where work gets pulled into development as other tasks are finished. Once the capacity rules are reached, no
more work can be placed onto the board preventing backlog tasks becoming outdated or irrelevant.

## Participants

- **Facilitator** - This person can and should come from the workers involved in the project board. The
  facilitator "walks the board" going from "Done" all the way back to "New" going over the status of each card
  and anything the group needs to know about them.
- **Workers** - Workers get assigned cards, work on them, and provide status updates when the facilitator
  calls on them.
- **Stakeholders** - Stakeholders are never assigned cards, but they are involved in the creation and
  prioritization of cards. They can change the status of a card at any point and move cards up/down the board
  columns to denote which cards are more important to work on next.

## Stages of Work

The DE project board currently consists of six stages.

| Column | Description | 
| :----: | :---: |
| Backlog | Work of lower importance that can't go into the WIP columns |
| New | New ideas that have been brought up in the last week |
| Todo | Work scheduled soon to be WIP |
| In Progress | Work assigned and started |
| In Review | Work that is close to done but needs review |
| Done | Work that is merged and in the deployment/deployed stage |

To illustrate the board flow, we will go through an example issue and its happy path towards resolution
describing the possible paths as each column is reached.

1. New issues start in the "New" column. There is no limit to the number of issues in this column; however, if
   too many issues pile up to be discussed in the backlog meeting, then a limit should be defined. Each 
   issue should be written in way where it can be moved into "Done" within three days of starting work. 
   You should [read the Simplicity document](./simplicity.md) to get a better idea of the desired thought 
   process when writing up issues.
2. New issues can go to three places:
    1. Todo: The todo column has space, and the issue is considered worthy of accepting.
    2. Backlog: The todo column is full, but the issue is considered worthy of accepting.
    3. Closed: The issue is not considered worth of accepting and/or the backlog and todo columns are full.
3. The issue reaches "Todo" and waits to be assigned to a worker.
4. Someone finishes an issue "In Progress" and assigns themselves an issue in "Todo" moving that issue to "In
   Progress".
5. Now the issue has a time limit of one to three days to move into "In Review" or else be closed in favor of
   newer, related issues. If an issue remains In Progress for several days without an update, the "blocked"
   should be placed on it and reviewed in the next status meeting.
6. Someone other than the original worker looks at the issue and marks it "Done".
7. Issues in the "Done" column are looked over, deployment steps completed, and the issue is archived at the
   next progress update meeting.

## Issue Checklists and Templates

You can [view all the available issue templates](../../.github/ISSUE_TEMPLATE) to get an idea of which 
types of issues will show up on the project board. However, to briefly describe the flow of an individual 
issue, we will go over the [development task issue template](../../.github/ISSUE_TEMPLATE/development-task.md).
Realistically, development tasks will take up about 80% of the board and they will relate to feature 
stories and other types of higher-level issues.

Components:
- **Issue Summary** - The issue starts out with a brief summary of why the issue exists with any notes.
- **AC (Acceptance Criteria)** - A checklist provides all the items needed before the issue can be closed. 
  Sometimes issues may be closed without completing all the checklist items as the checklist is supposed 
  to be modified as work progresses. You probably won't get all the AC right when project work is 
  exploratory, and most hard requirements aren't known yet.
- **Next Issue** - This section gets you thinking about the next step in the process once the current task 
  is completed. If you can't think of a next step, then maybe the issue isn't ready to be worked on yet.
- **CI Checks** - Once the issue moves onto the stage where a pull request is made, several CI checks 
  should run and pass. If they don't pass more work is needed to complete the issue even if the AC 
  checklist is completed.

## Issue Labels

Issue labels can become confusing as they are applied to the issues. For these reasons, DE has selected a few
labels to help prioritize work.

Any issue with one of these labels attached cannot be placed in the backlog, except "stale". The reason for
adding any label at all is to denote a higher priority than other issues on the project board and placing high
priority items in the backlog inherently lowers their perceived importance.

Default Labels:

- **blocked** - Issues that need questions answered before more work can proceed.
- **bug** - Any issue stemming from a deployed feature not functioning as expected.
- **dependencies** - All dependency updates. Dependabot creates the PR and places the label on it.
- **incident** - Issues relating to a service disruption of a deployed application.
- **pinned** - Placed by a developer on issues with no activity for 60 days but are deemed too important to
  close.
- **security** - Issues relating to security, usually dependency updates or scanning report failures.
- **stale** - Placed by Stalebot on issues with no activity for 60 days. If no further activity is taken, the
  issue will be closed by Stalebot in after one week.
- **unblocker** - Issues that precede another "blocked" issue.

## Work In Progress Limit

Currently, there is no work in progress limit on the DE project board. For the time being, work is being 
monitored to determine a WIP limit and once known, each worker will adhere to their individual limit 
across all projects serving stakeholders.

## Boardwalk Meetings

...

## Delivery Cadence

...there should be one but how and how often? Maybe plan to incorporate an allocated amount of cards to 
each stakeholder group per month. Work on those cards should be estimated for two weeks leaving half the 
time for carry over and more testing. 


## Input Cadence 

...

## The Backlog

Backlog size should be determined by the volatility of work. The DE team is involved in many highly volatile
projects, and therefore the backlog should not grow to included items that can be worked on in the next 
month. 

Right now, the Stalebot helps with backlog mangagement by closing issues that haven't been touched for 60 
days. In the future, the number of days before Stalebot marks an item "stale" will be reduced to 
compliment the rate of flow through the project board.  

To determine the limit of items in the backlog, the number of items pushed through per week should be 
measured and then multiplied by four to get a theoretical limit of work done in a month's time.

# Inspirations

- Discussion at the end
  of [Goal: A Process of Ongoing Improvement](https://www.amazon.com/Goal-Process-Ongoing-Improvement-ebook/dp/B002LHRM2O/)
- Kanban Wikipedia - https://en.wikipedia.org/wiki/Kanban
- Kanban Development Wikipedia: https://en.wikipedia.org/wiki/Kanban_(development)
- Kanban book - https://www.amazon.com/Kanban-David-J-Anderson-ebook/dp/B0057H2M70/
