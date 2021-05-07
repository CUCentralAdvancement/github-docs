[<-- Home](/readme.md)

# Gitflow Branch Management

When an issue moves from "Todo" to "In Progress" on the Kanban project board, it is important
to use a Git branching strategy that prevents merge conflicts and allows for hotfixes and bugs
to be deployed independent of feature development work.

For these reasons the DE (Digital Engagement) team has adopted Gitflow for moving development
work through "In Progress" to "Done". 

## Default Branches

| Prefix | Function | 
| :----: | :---: |
| `main` | The branch that is currently deployed. Only merge from`release` and `bug` branches. |
| `dev` | The branch that all development work goes through. |

## Development Branch names

| Prefix | Function | 
| :----: | :---: |
| `feature/*` | Most work tied to an issue in GitHub. |
| `release/*` | Created off of `dev` in preparation for deployment. |
| `bug/*` | Usually called `hotfix` this branch is created only from `main`. |

## Process

The overall flow of Gitflow ([taken from Atlassian docs](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)):

1. A `dev` branch is created from `main`.
1. A `release` branch is created from `dev`.
1. `feature/` branches are created from develop when an issue is assigned and marked 
   "In Progress".
1. When a `feature/` is complete it is merged into the `dev` branch.
1. When the `release` branch is done it is merged into `dev` and `main`.
1. If an issue in `main` is detected a `bug/` branch is created from `main`.
1. Once the `bug/` is fixed it is merged to both `dev` and `main`.
