import React from 'react';
import {
  Container,
  Header,
  Content,
  Accordion,
} from 'native-base';
import { SafeAreaView } from 'react-native';

const dataArray = [{
  title: 'What break timer do you use?',
  content: 'It\'s called Time Out by Dejal. It is only available for Mac. For Windows, checkout Eye Leo. I have it setup for a 10 second micro break every 10 minutes and a 5 minute break every 60 minutes.'
},
{
  title: 'Will the livestream be available as a video?',
  content: 'Yes! Every livestream is immediately available to watch after the stream is over. The URL is will be the same. Longer streams take time to process, but will show up on the Coding Garden videos page after a few hours.'
},
{
  title: 'What code editor do you use?',
  content: 'In my earlier videos I used Atom. Now I use VS Code. I have lots of plugins and settings that make VS Code behave the way it does. Checkout the vscode-settings repo on github to see all of the plugins and settings I use.'
},
{
  title: 'What theme do you use in VS Code?',
  content: 'For VS Code I use Seti-Monokai. In my older videos where I am using Atom, I use Brahalla Syntax.'
},
{
  title: 'What keyboard do you use?',
  content: 'An inexpensive mechanical keyboard from Amazon. Check it out here: https://amzn.to/2EwYmSd'
},
{
  title: 'How long have you been coding?',
  content: 'Over 15 years! I started coding HTML / CSS websites as a kid. Learned Java, C, C++ in college. Wrote C# / .NET desktop applications for a while. Started learning modern web technologies in my spare time, and taught JavaScript full stack web development for 3+ years.'
},
{
  title: 'What\'s the best way to contact you ?',
  content: 'Join the discord. https://coding.garden/discord'
},
{
  title: 'How do you add emojis in VS Code?',
  content: 'This is a feature of Mac OS X. Press CTRL+CMD+Space to bring up the emoji menu! On Windows 10 you can use CTRL+Period  '
}];

export default function FAQ() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Content padder>
          <Accordion dataArray={dataArray} expanded={0}/>
        </Content>
      </Container>
    </SafeAreaView>
  );
}
