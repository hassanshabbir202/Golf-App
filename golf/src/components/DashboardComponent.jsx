import DashboardHeader from './DashboardHeader';
import BannerComponent from './BannerComponent';
import DashboardInvitationCard from './DashboardInvitationCard';
import AddBuddiesInfo from './AddBuddiesInfo';

const DashboardComponent = () => {
  return (
    <>
      <DashboardHeader />
      <BannerComponent />
      <DashboardInvitationCard />
      <AddBuddiesInfo />
    </>
  );
};

export default DashboardComponent;
