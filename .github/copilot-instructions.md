# Copilot Instructions

## Part 1: Coding Style Guidelines

### Determine the implementation strategy
- **Always ask** if we should create a planning document before starting any new feature or significant implementation.

### Package Management
- **Always use `yarn`** for all package management operations
  - Install packages: `yarn add <package>`
  - Install dev dependencies: `yarn add -D <package>`
  - Run scripts: `yarn <script-name>`
  - Never use `npm` commands

### Code Style
- Follow existing project patterns and conventions
- Use TypeScript for type safety
- Prefer functional components with hooks over class components
- Use meaningful variable and function names
- Keep components focused and single-responsibility

### File Organization
- Place new features in appropriate module folders under `src/modules/`
- Keep components colocated with their tests
- Use absolute imports from `src/` when possible

---

## Part 2: Implementation Planning Process

When starting any new feature or significant implementation:

### 1. Always create a planning document first before writing any code
- File naming format: `YYYYMMDD_HHMMSS_FEATURE_NAME.md` (e.g., `20250115_143022_SHOOT_VIEWS_DEPENDENCY.md`)
- Place in `/doc` folder

### 2. Document structure must include:
- **Overview**: Brief description of the feature/problem being solved and the goal
- **Current State Analysis**: Relevant code excerpts, database schema, component structure
- **Proposed Solution**: High-level approach and key decisions
- **Implementation Tasks**: Numbered list of concrete tasks with file paths
- **Edge Cases to Handle**: List of scenarios to consider
- **Testing Strategy**: Manual and unit testing approach
- **Questions to Validate**: List all questions that need answers before proceeding
- **🐛 Bugs Found During Testing**: Section to track issues discovered during implementation (add when needed)

### 3. Question-driven validation:
- List ALL questions upfront in a dedicated section
- Mark questions with checkboxes: `- [ ] Question here?`
- Keep asking follow-up questions until ALL are answered and marked: `- [x] Question answered`
- Do NOT proceed to implementation until all questions are resolved
- Update the document with decisions inline after each question

### 4. Code in planning docs:
- ONLY include code excerpts when:
  - Showing current state for context
  - Highlighting specific logic that needs changing
  - Demonstrating complex algorithm/logic flow
- Use **type signatures and interfaces** instead of full implementations
- Focus on "what" and "why", not "how"

### 5. Task execution:
- Tasks must be concrete and actionable (e.g., "Update `ShootViewsCard.tsx` to accept `selectedModels` prop")
- Include file paths for every task
- Use checkboxes: `- [ ] Task description`
- Complete tasks ONE AT A TIME
- After completing each task, update checkbox: `- [x] Task description`
- After EACH completed task, ask: "Task X completed. Ready to proceed with Task Y?"
- Wait for user confirmation before continuing
- **Test after each major phase** (e.g., after Phase 1, verify UI renders correctly before moving to Phase 2)

### 6. Iterative refinement:
- After user feedback, update the document inline
- Add "Decision" or "Answer" sections after each question
- Keep a log of changes at the bottom if major pivots occur
- **When bugs are found**: Add a "🐛 Bugs Found During Testing" section to the document
- **Create bug fix tasks**: List specific, numbered tasks to address each bug
- **Track attempts**: If a fix doesn't work, document what was tried and why it failed

### 7. Document is source of truth:
- Refer back to the document during implementation
- Update task statuses as you progress
- Use emojis for status: ✅ (done), ⏳ (in progress), ❌ (blocked)

---

## Example Usage

```
User: "I want to add a new feature X"
Copilot: "I'll create a planning document first. Creating `20251021_150000_FEATURE_X.md`..."
[Creates document with questions]
Copilot: "I have 5 questions to validate before we proceed..."
[Iterates until all answered]
Copilot: "All questions resolved! Ready to start Task 1: [description]. Shall I proceed?"
[Completes Task 1]
Copilot: "Task 1 completed. Ready to proceed with Task 2?"
[User tests and finds a bug]
User: "The images aren't displaying"
Copilot: "I'll add this to the bugs section and create fix tasks..."
```

---

## After Implementation: Improve This Document

At the end of each implementation, **review the implementation process** and identify:
- Patterns of back-and-forth that could be avoided
- Questions that should have been asked upfront
- Common mistakes or assumptions made
- Process improvements that would help future implementations

**Action**: Suggest specific updates to this `copilot-instructions.md` document based on:
- What needed multiple attempts to get right
- What was unclear or missing from the instructions
- What worked well and should be emphasized more

The goal is to continuously refine these instructions so future implementations are smoother.

---

## Quick Reference Checklist

**Before starting implementation:**
- [ ] Planning document created in `/doc` folder
- [ ] All questions answered and marked with `[x]`
- [ ] Tasks are concrete with file paths
- [ ] Edge cases identified
- [ ] Testing strategy defined

**During implementation:**
- [ ] Complete tasks one at a time
- [ ] Update checkboxes as tasks complete
- [ ] Ask for confirmation before proceeding to next task
- [ ] Test after each major phase
- [ ] Use `yarn` for all package operations
- [ ] Document decisions inline when approach changes

**When bugs found:**
- [ ] Add "🐛 Bugs Found During Testing" section
- [ ] List each bug clearly with expected vs actual behavior
- [ ] Create numbered bug fix tasks
- [ ] Track what was attempted if fixes don't work on first try

**After implementation complete:**
- [ ] Review what needed iteration and why
- [ ] Suggest improvements to this instructions document
- [ ] Update instructions if user approves changes
