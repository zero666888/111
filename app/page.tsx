import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function VancetWebsite() {
  const holderData = [
    { name: "张**", contact: "con****@qq.com", amount: "73000" },
    { name: "王**", contact: "177****39", amount: "71000" },
    { name: "何**", contact: "177****70", amount: "62000" },
    { name: "孔**", contact: "158****51", amount: "61000" },
    { name: "韩**", contact: "183****40", amount: "57000" },
    { name: "韩**", contact: "mai****@qq.com", amount: "55000" },
    { name: "何**", contact: "187****20", amount: "51000" },
    { name: "邹**", contact: "194****41", amount: "50000" },
    { name: "卫**", contact: "135****50", amount: "50000" },
    { name: "喻**", contact: "136****84", amount: "49000" },
    { name: "陶**", contact: "131****11", amount: "47000" },
    { name: "柏**", contact: "con****@qq.com", amount: "47000" },
    { name: "卫**", contact: "mai****@outlook.com", amount: "44000" },
    { name: "卫**", contact: "197****18", amount: "43000" },
    { name: "柏**", contact: "use****@gmail.com", amount: "40000" },
    { name: "褚**", contact: "mai****@163.com", amount: "7000" },
    { name: "李**", contact: "171****29", amount: "7000" },
    { name: "曹**", contact: "use****@qq.com", amount: "7000" },
    { name: "冯**", contact: "con****@qq.com", amount: "7000" },
    { name: "郑**", contact: "188****77", amount: "6000" },
    { name: "水**", contact: "use****@outlook.com", amount: "6000" },
    { name: "郑**", contact: "179****74", amount: "5000" },
    { name: "张**", contact: "mai****@outlook.com", amount: "5000" },
    { name: "姜**", contact: "175****33", amount: "3000" },
    { name: "王**", contact: "176****87", amount: "3000" },
    { name: "郑**", contact: "mai****@163.com", amount: "3000" },
    { name: "赵**", contact: "195****18", amount: "2000" },
    { name: "华**", contact: "use****@gmail.com", amount: "2000" },
    { name: "喻**", contact: "use****@163.com", amount: "2000" },
    { name: "施**", contact: "186****93", amount: "2000" },
    { name: "尤**", contact: "152****59", amount: "1000" },
    { name: "冯**", contact: "mai****@outlook.com", amount: "1000" },
    { name: "秦**", contact: "mai****@gmail.com", amount: "1000" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="relative bg-gradient-to-r from-blue-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="mb-6">
            <Image
              src="/placeholder.svg?height=120&width=120"
              alt="VANCET Logo"
              width={120}
              height={120}
              className="mx-auto rounded-full border-4 border-white/20"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">VANCET</h1>
          <p className="text-xl md:text-2xl text-blue-100">VANCE Token Whitepaper</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Introduction */}
        <section>
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-slate-800">Introduction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-lg leading-relaxed text-slate-700">
                  VANCET Coin is a politically-inspired digital asset created in honor of U.S. Vice Presidential
                  candidate <strong>J.D. Vance</strong>. Following the successful cultural impact of the TrumpCoin
                  phenomenon, VANCET Coin aims to celebrate American values, freedom of speech, and the spirit of
                  digital ownership through blockchain technology.
                </p>
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                <p className="text-lg leading-relaxed text-slate-700">
                  VANCET Coin is not affiliated with any official campaign or political party. It is a community-driven,
                  speculative meme token designed for collectors, supporters, and believers in a freer financial future.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Token Overview */}
        <section>
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-slate-800">Token Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                    <span className="font-semibold text-slate-600">Token Name:</span>
                    <Badge variant="secondary" className="text-lg px-4 py-2">
                      VANCET Coin
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                    <span className="font-semibold text-slate-600">Symbol:</span>
                    <Badge variant="secondary" className="text-lg px-4 py-2">
                      VANCET
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                    <span className="font-semibold text-slate-600">Blockchain:</span>
                    <Badge variant="secondary" className="text-lg px-4 py-2">
                      Ethereum (ERC-20)
                    </Badge>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="font-semibold text-slate-600">Total Supply:</span>
                    <Badge variant="outline" className="text-lg px-4 py-2 border-green-500 text-green-700">
                      1,000,000,000 VANCET
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <span className="font-semibold text-slate-600">Initial Private Sale:</span>
                    <Badge variant="outline" className="text-lg px-4 py-2 border-blue-500 text-blue-700">
                      100,000,000 VANCET (10%)
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                    <span className="font-semibold text-slate-600">Token Price:</span>
                    <Badge variant="outline" className="text-lg px-4 py-2 border-purple-500 text-purple-700">
                      $1.00 USD per VANCET
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Private Sale Details */}
        <section>
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-slate-800">Private Sale Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                The VANCET Coin private sale is limited to <strong>10%</strong> of the total supply, with a hard cap of{" "}
                <strong>$100,000,000 USD</strong>. Purchases can only be made using <strong>USDT (Tether)</strong> on
                Ethereum. No additional private rounds will be held.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <h4 className="font-semibold text-slate-700 mb-2">Total Private Allocation</h4>
                  <p className="text-2xl font-bold text-blue-700">100,000,000 VANCET</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                  <h4 className="font-semibold text-slate-700 mb-2">Unit Price</h4>
                  <p className="text-2xl font-bold text-green-700">$1.00</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                  <h4 className="font-semibold text-slate-700 mb-2">Accepted Currency</h4>
                  <p className="text-2xl font-bold text-purple-700">USDT</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                  <h4 className="font-semibold text-slate-700 mb-2">Minimum Purchase</h4>
                  <p className="text-2xl font-bold text-orange-700">1,000 VANCET</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-lg">
                  <h4 className="font-semibold text-slate-700 mb-2">Maximum Purchase</h4>
                  <p className="text-2xl font-bold text-red-700">100,000 VANCET</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
                  <h4 className="font-semibold text-slate-700 mb-2">Distribution</h4>
                  <p className="text-lg font-bold text-teal-700">Within 24 hours</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Post-Launch and Trading */}
        <section>
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-slate-800">Post-Launch and Trading</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <p className="text-lg leading-relaxed text-slate-700">
                  After the private sale concludes, VANCET Coin will be listed on decentralized exchanges (DEXs),
                  enabling <strong>open market trading</strong>. Pricing will be determined by market demand, and no
                  restrictions will be placed on transfers or trades.
                </p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-lg leading-relaxed text-slate-700">
                  There will be <strong>no transaction taxes</strong> or hidden fees. Smart contract code will be
                  publicly verifiable to ensure transparency.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Vision */}
        <section>
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-slate-800">Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-8 rounded-r-lg">
                <p className="text-xl leading-relaxed text-slate-700 text-center italic">
                  VANCET Coin represents more than just a token. It symbolizes the grassroots enthusiasm behind populist
                  politics, freedom of expression, and the blending of digital culture with American leadership
                  narratives. Whether you're here to collect, speculate, or support — you're part of a broader movement.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* VANCET Team */}
        <section>
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-slate-800">VANCET Team</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="relative mx-auto w-32 h-32">
                    <Image
                      src="/placeholder.svg?height=128&width=128"
                      alt="James David Vance"
                      width={128}
                      height={128}
                      className="rounded-full border-4 border-blue-200 shadow-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">James David Vance</h3>
                    <p className="text-slate-600">Founder</p>
                  </div>
                </div>
                <div className="text-center space-y-4">
                  <div className="relative mx-auto w-32 h-32">
                    <Image
                      src="/placeholder.svg?height=128&width=128"
                      alt="Samira Hadid"
                      width={128}
                      height={128}
                      className="rounded-full border-4 border-green-200 shadow-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Samira Hadid</h3>
                    <p className="text-slate-600">Association Director</p>
                  </div>
                </div>
                <div className="text-center space-y-4">
                  <div className="relative mx-auto w-32 h-32">
                    <Image
                      src="/placeholder.svg?height=128&width=128"
                      alt="Olivia Wilson"
                      width={128}
                      height={128}
                      className="rounded-full border-4 border-purple-200 shadow-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Olivia Wilson</h3>
                    <p className="text-slate-600">Fund Director</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Asia Pacific Owners */}
        <section>
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-slate-800">Asia Pacific Owner</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-700">Name</th>
                      <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-700">
                        Contact Information
                      </th>
                      <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-700">
                        VANCET Number
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {holderData.map((holder, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="border border-slate-300 px-4 py-2 text-slate-700">{holder.name}</td>
                        <td className="border border-slate-300 px-4 py-2 text-slate-700">{holder.contact}</td>
                        <td className="border border-slate-300 px-4 py-2 text-slate-700 font-semibold">
                          {holder.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Legal Disclaimer */}
        <section>
          <Card className="border-0 shadow-lg border-l-4 border-red-500">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-slate-800">Legal Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-red-50 p-6 rounded-lg">
                <p className="text-lg leading-relaxed text-slate-700">
                  VANCET Coin is a meme-based digital asset. It is <strong>not an investment contract</strong>,{" "}
                  <strong>not backed by any government</strong>, and{" "}
                  <strong>not officially associated with J.D. Vance or any political organization</strong>. Purchasers
                  understand that all transactions are final, and VANCET Coin carries no guarantee of value or return.
                </p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-slate-700">
                  Always conduct your own research. Participation in the VANCET ecosystem is at your own risk.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">VANCET</p>
          <p className="text-slate-400">A community-driven digital asset celebrating American values</p>
        </div>
      </footer>
    </div>
  )
}
