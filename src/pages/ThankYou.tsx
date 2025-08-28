import { Button } from "@/components/ui/button";
import { ExternalLink, Users, CheckCircle } from "lucide-react";

const ThankYou = () => {
  const handleSlackJoin = () => {
    // Replace with your actual Slack invite link
    window.open("https://join.slack.com/t/ulo-community/shared_invite/zt-xxxxx", "_blank");
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <img src="/ulo-logo.png" alt="Ulo" className="h-16" />
        </div>

        {/* Thank You Message */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-white">
            Welcome to the Ulo Community!
          </h1>
          <p className="text-lg text-white/80">
            Thank you for joining us. We're excited to have you on this journey of connecting the world to Africa.
          </p>
        </div>

        {/* Community Benefits */}
        <div className="bg-white/10 rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-white flex items-center justify-center gap-2">
            <Users className="w-5 h-5" />
            What's Next?
          </h2>
          <div className="space-y-3 text-white/80">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm">Connect with fellow travelers and local guides</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm">Get exclusive travel tips and insights</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm">Access early updates on new destinations</p>
            </div>
          </div>
        </div>

        {/* Slack Integration Button */}
        <div className="space-y-4">
          <Button 
            onClick={handleSlackJoin}
            className="w-full bg-white text-primary hover:bg-white/90 font-semibold py-3"
            size="lg"
          >
            Join Our Slack Community
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
          
          <p className="text-sm text-white/60">
            Connect with other community members and get real-time updates
          </p>
        </div>

        {/* Back to Home */}
        <div className="pt-4">
          <Button 
            variant="outline" 
            className="border-white/30 text-white hover:bg-white/10"
            onClick={() => window.location.href = "/"}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;