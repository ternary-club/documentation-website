import React from 'react';
import Link from '@docusaurus/Link';

import Docs from '@site/static/img/docs.svg';
import Paper from '@site/static/img/paper.svg';

import { IconLink, DockerImage } from '..';

import classes from './styles.module.css';

const Tutorial: React.FC = () => (
  <div className={classes.container}>
    <h1>Getting started</h1>
    <div className={classes.textContainer}>
      <p>
        Welcome to the world of ternary computing! We’re excited to help you
        make your way through it with our toolkit. Let’s get started!
      </p>

      <h2>Prerequisites</h2>
      <p>
        You will need the latest Docker version installed in your machine. You
        can get it on{' '}
        <Link to="https://www.docker.com/products/docker-desktop">
          their official website
        </Link>
        . Once you’ve installed it, you’re ready to go!
      </p>

      <h2>Downloading our image</h2>
      <p>
        We’ve prepared a Docker image with a fancy code editor that will help
        you to write your first couple of codes. You can check out all of our
        downloads <Link to="#downloads">here</Link>.
      </p>
      <p>
        You’ll need to run this Docker command that will pull the image for you:
      </p>

      <DockerImage command="docker run ternaryclub/getting-started 80:80" />

      <p>
        After it was downloaded and initialized, you can simply access{' '}
        <Link to="http://localhost/">http://localhost/</Link> in your favorite
        browser and you’ll probably see something like this:
      </p>
      <div className={classes.imageContainer}>
        <img
          src="/static/img/playground-1.svg"
          alt="Playground projects"
          width="100%"
        />
        <span>It means it worked!</span>
      </div>

      <h2>Running your first ternary code</h2>
      <p>
        Go ahead and access the “Hello World” project. First, you need to
        compile it (or more correctly, assemble it) so it gets converted into
        ternary instructions that Taylor can read (and execute).
      </p>
      <p>
        Click on the green button with a hammer on it to start assembling the
        Terry code (the code on the left):
      </p>

      <div className={classes.imageContainer}>
        <img
          src="/static/img/playground-2.svg"
          alt="Playground build"
          width="100%"
        />
        <span>That hammer right there.</span>
      </div>
      <p>
        After the assembly code has been converted into ternary instructions,
        click the play button and see the magic happen! That’s right! Taylor
        just got Hello-worlded 😎.
      </p>

      <h2>Learning more</h2>
      <p>
        But you will need more than that to become a senior ternary programmer.
        Or maybe not. Either way, you can find more details about Terry, Taylor
        and ternary computing in general on our docs! We sometimes also write
        some cool tutorials and articles on our blog. Feel free to check them
        out!
      </p>
    </div>
    <div className={classes.buttonsContainer}>
      <IconLink to="/docs/intro" text="Access the docs" Icon={Docs} />
      <IconLink to="/blog" text="Visit our blog" Icon={Paper} outline />
    </div>
  </div>
);

export { Tutorial };
