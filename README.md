# real-time-blog

A real-time blog built with Pusher's [TextSync](http://docs.pusher.com/textsync) and [Feeds](http://pusher.com/feeds)

## Getting Started

Clone the project repository by running the command below if you use SSH

```bash
git clone git@github.com:ammezie/real-time-blog.git
```

If you use https, use this instead

```bash
git clone https://github.com/ammezie/real-time-blog.git
```

After cloning, run:

```bash
npm install
```

Rename `.env.example` to `.env` and your TextSync and Feeds keys to it:

```txt
TEXT_SYNC_INSTANCE_LOCATOR=YOUR_TEXTSYNC_INSTANCE_LOCATOR
FEEDS_INSTANCE_LOCATOR=YOUR_FEEDS_INSTANCE_LOCATOR
FEEDS_SECRET_KEY=YOUR_FEEDS_SECRET_KEY
```

And finally, start the application:

```bash
npm start
```

and visit [http://localhost:3000](http://localhost:3000) to see the application in action.