import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { observer } from 'mobx-react-lite';
import { StyledHomePage, Section, Title } from 'src/pages/HomePage/parts';
import Stateless from 'src/components/Stateless';
import StatelessWithEventHandler from 'src/components/StatelessWithEventHandler';
import StatelessConfigurableProps from 'src/components/StatelessConfigurableProps';
import theme from 'src/features/App/GlobalStyle/theme';
import StatefulUseState from 'src/components/StatefulUseState';
import StatefulMobxLocal from 'src/components/StatefulMobxLocal';
import SimpleStatefulMobxGlobal from 'src/components/StatefulMobxGlobal';
import SampleFeature from 'src/features/SampleFeature';
import AdvancedFeature from 'src/features/AdvancedFeature';
import FeatureOnload from 'src/features/FeatureOnload';

const HomePage: React.FC<RouteComponentProps> = observer(() => {
  return (
    <StyledHomePage>
      <Section>
        <Title>Stateless component</Title>
        <Stateless>Click and get nothing</Stateless>
      </Section>

      <Section>
        <Title>Stateless component with configurable event handler</Title>
        <StatelessWithEventHandler onClick={(): void => alert('I am not so stupid.')}>
          Click and get something
        </StatelessWithEventHandler>
      </Section>

      <Section>
        <Title>Stateless component with configurable props</Title>
        <StatelessConfigurableProps
          onClick={(): void => alert('I pretty good.')}
          color={theme.colors.yellow.a}
          borderRadius={50}
        >
          You can configure my color and border-radius in code
        </StatelessConfigurableProps>
      </Section>

      <Section>
        <Title>Stateful component (useState)</Title>
        <StatefulUseState onClick={(): void => alert('I am kind of stateful')} />
      </Section>

      <Section>
        <Title>Stateful component (MobX local store)</Title>
        <StatefulMobxLocal onClick={(): void => alert('I am really stateful')} />
      </Section>

      <Section>
        <Title>Stateful component (MobX global store)</Title>
        <SimpleStatefulMobxGlobal />
      </Section>

      <Section>
        <Title>Feature with API call</Title>
        <SampleFeature />
      </Section>

      <Section>
        <Title>Feature with several API calls</Title>
        <AdvancedFeature />
      </Section>

      <Section>
        <Title>Feature that fetches data once rendered</Title>
        <FeatureOnload />
      </Section>
    </StyledHomePage>
  );
});

export default HomePage;
