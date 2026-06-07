# 951 Hotel OS MVP Version 1

951 Hotel OS is a lightweight internal SaaS MVP for replacing Facebook Inbox lead tracking, Google Sheets client records, and manual task follow-up.

## What is included

- Google-login-style entry screen
- Modern responsive SaaS dashboard
- Hotel CRM with contacts, package, contract, services, and status
- Lead management with source, status, notes, and follow-up date
- Task management with hotel, assignee, due date, priority, and status
- Team management with employees, roles, departments, and status
- Multi-tenant-ready data model using `tenantId`
- Local sample data for 951 Pro Solutions clients and team
- PostgreSQL schema in `database/schema.sql`
- PostgreSQL sample seed data in `database/seed.sql`

## How to run

Open `index.html` in a browser.

The MVP stores changes in browser local storage, so the team can test real daily operations immediately without installing a backend.

## MVP login

Click `Sign in with Google`.

This version simulates Google Login for speed. In production, connect this screen to Google OAuth and store users in the `users` table using `google_subject`.

## Suggested 7-day rollout

Day 1-2: Add real hotel contacts, packages, services, and contract notes.

Day 3-4: Move Facebook Inbox leads and active spreadsheet tasks into the OS.

Day 5-7: Run daily team check-ins from the dashboard and update every task inside the app.

## Next backend step

Use the schema in `database/schema.sql` with PostgreSQL or Supabase. Keep every query scoped by `tenant_id` before adding a client portal or external users.
