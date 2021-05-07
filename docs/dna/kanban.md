[<-- Home](/readme.md)

# Kanban Project Board

The DE (Digital Engagement) team manages all work via a Kanban project board. Taiichi Ohno, an 
industrial engineer at Toyota, developed Kanban to improve manufacturing efficiency, but many
people have adopted the same principles within software development. Theory of Constraints,
sometimes called "drum-buffer-rope", is also intertwined with the Kanban concept as it applies
to software development.

Work is condensed into one "project board" that lists all the tasks in one place. The board
has columns, a directional flow, and rules related to how many tasks can be in each column.
It is said to be a "pull system" where work gets pulled into development as other tasks are
finished. Once the capacity rules are reached, no more work can be placed onto the board
preventing backlog tasks becoming outdated or irrelevant.

The DE project board currently consists of six stages. 


| Column | Description | 
| :----: | :---: |
| Backlog | Work of lower importance that can't go into the WIP columns |
| New | New ideas that have been brought up in the last week |
| Todo | Work scheduled soon to be WIP |
| In Progress | Work assigned and started |
| In Review | Work that is close to done but needs review |
| Done | Work that is merged and in the deployment/deployed stage |

To illustrate the board flow, we will go through an example issue and its happy path towards
resolution describing the possible paths as each column is reached.

1. New issues start in the "New" column. There is no limit to the number of issues in this 
   column; however, if too many issues pile up to be discussed in the backlog meeting, then a 
   limit should be defined.
2. New issues can go to three places:
    1. Todo: The todo column has space, and the issue is considered worthy of accepting.
    2. Backlog: The todo column is full, but the issue is considered worthy of accepting.
    3. Closed: The issue is not considered worth of accepting and/or the backlog and todo
    columns are full.
3. The issue reaches "Todo" and waits to be assigned to a worker.
4. Someone finishes an issue "In Progress" and assigns themselves an issue in "Todo" moving
   that issue to "In Progress".
5. One or two days of work pass and the issue moves to "In Review".
6. Someone other than the original worker looks at the issue and marks it "Done".
7. Issues in the "Done" column are looked over, deployment steps completed, and the issue 
   is archived at the nest backlog meeting. 
   
## Issue Labels

Issue labels can become confusing as they are applied to the issues. For these reasons, DE has
selected a few labels to help prioritize work.

- **incident** - Issues relating to a service disruption of a deployed application.
- **security** - Issues relating to security, usually dependency updates or scanning report
  failures.
- **pinned** - Placed by Stale bot on issues with no activity for 60 days, and a developer
who deems the issue should never be closed.
- **dependencies** - All dependency updates. Dependabot creates the PR and places the label
  on it.
- **bug** - Any issue stemming from a deployed feature not functioning as expected. 
- **blocked** - Issues that need questions answered before more work can proceed.

# Inspirations

- Discussion at the end of "Goal: A Process of Ongoing Improvement"
- Kanban Wikipedia - https://en.wikipedia.org/wiki/Kanban
- Kanban Development Wikipedia: https://en.wikipedia.org/wiki/Kanban_(development)
- Kanban book - https://www.amazon.com/Kanban-David-J-Anderson-ebook/dp/B0057H2M70/
