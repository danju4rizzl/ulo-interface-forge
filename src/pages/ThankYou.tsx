import { Button } from "@/components/ui/button";
import { Users, ExternalLinkIcon } from 'lucide-react'

const ThankYou = () => {
  const handleSlackJoin = () => {
    // Replace with your actual Slack invite link
    window.open(
      'https://join.slack.com/t/ulo-community/shared_invite/zt-xxxxx',
      '_blank'
    )
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Thank You Message */}
        <div className="space-y-4">
          <h1 className="text-7xl font-bold text-foreground">Thank You!</h1>
          <p className="text-lg text-muted-foreground">
            Together, we are opening new doors for the world to experience
            Africa with pride, culture, and belonging.
          </p>
        </div>

        {/* Community Benefits */}
        <div className="bg-muted rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-foreground flex items-center justify-center gap-2">
            <Users className="w-5 h-5" />
            What's Next?
          </h2>
          <p className="text-md text-muted-foreground">
            Join our private community to be the first to know when Ulô
            launches, gain insider access to our Demo Launch and Ulô Festival,
            and play a part in shaping how Africa is shared with the world.
          </p>

          <a
            href="https://whatsapp.com/channel/0029Vb6VwpCAzNbvdjovPd1o"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="bg-white hover:bg-primary text-gray-800 hover:text-white px-10 py-6 rounded-md border border-gray-200 shadow-sm flex items-center gap-3 font-medium text-lg">
              <div className="max-w-sm w-7 mb-1">
                <img src="/icons/whatsapp-3.svg" alt="" />
              </div>
              Join us on WhatsApp <ExternalLinkIcon />
            </Button>
          </a>
        </div>

        {/* Slack Integration Button */}
        <div className="space-y-4">
          {/* <Button
            onClick={handleSlackJoin}
            className="w-full font-semibold py-3"
            size="lg"
          >
            Join Our Slack Community
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button> */}

          <p className="text-sm text-muted-foreground">
            Connect with other community members and get real-time updates
          </p>
        </div>

        {/* Back to Home */}
        <div className="pt-4">
          <Button
            variant="outline"
            onClick={() => (window.location.href = '/')}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ThankYou;