import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";
import { DeliveryBag } from "@shared/interfaces/types/deliveryBag";
import chromium from "@sparticuz/chromium";
import path from "path";
import fs from "fs";

export async function POST(request: NextRequest) {
  try {
    const data: DeliveryBag[] = await request.json();

    data.sort((a, b) => a.bairro.localeCompare(b.bairro));
    const groupedByBairro: { [key: string]: DeliveryBag[] } = data.reduce(
      (groups: { [key: string]: DeliveryBag[] }, bag) => {
        if (!groups[bag.bairro]) {
          groups[bag.bairro] = [];
        }
        groups[bag.bairro].push(bag);
        return groups;
      },
      {}
    );

    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
    });

    const page = await browser.newPage();

    const logoBase64 =
      "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iQ2FtYWRhXzIiIGRhdGEtbmFtZT0iQ2FtYWRhIDIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDgyLjMzIDI2LjQ3Ij4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMWQxZTFkOwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8ZyBpZD0iQ29udGXDumRvIj4KICAgIDxnPgogICAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNC40NCw0Ljg5QzEyLjIyLDIuMTksMTAuMDQuNDMsOS45NC4zNmwtLjQ1LS4zNi0uNDUuMzZjLS4wOS4wNy0yLjI4LDEuODQtNC41LDQuNTMtMS4zMSwxLjU5LTIuMzYsMy4xOC0zLjExLDQuNzMtLjk2LDEuOTYtMS40NSwzLjg2LTEuNDUsNS42MywwLDIuNTIsMSw0LjgyLDIuOCw2LjQ4LDEuNTksMS40NiwzLjY5LDIuMzMsNS45OCwyLjQ4djIuMjdoMS40M3YtMi4yN2MyLjI5LS4xNSw0LjM5LTEuMDIsNS45OC0yLjQ4LDEuODEtMS42NiwyLjgtMy45NiwyLjgtNi40OCwwLTEuNzctLjQ5LTMuNjctMS40NS01LjYzLS43NS0xLjU0LTEuOC0zLjEzLTMuMTEtNC43M1pNOS41LDkuOTljLS4zLDAtLjU0LS4yNC0uNTQtLjU0cy4yNC0uNTQuNTQtLjU0LjU0LjI0LjU0LjU0LS4yNC41NC0uNTQuNTRaTTEwLjIxLDIyLjc3di0zLjRsMi43OC0yLjc4Yy4yNC4xMS41MS4xNy43OS4xNywxLjA4LDAsMS45Ni0uODgsMS45Ni0xLjk2cy0uODgtMS45Ni0xLjk2LTEuOTYtMS45Ni44OC0xLjk2LDEuOTZjMCwuMjguMDYuNTUuMTcuNzlsLTEuNzcsMS43N3YtNi4wN2MuNzMtLjI5LDEuMjUtMSwxLjI1LTEuODMsMC0xLjA4LS44OC0xLjk2LTEuOTYtMS45NnMtMS45Ni44OC0xLjk2LDEuOTZjMCwuODMuNTIsMS41NCwxLjI1LDEuODN2Ni4wN2wtMS43Ny0xLjc3Yy4xMS0uMjQuMTctLjUxLjE3LS43OSwwLTEuMDgtLjg4LTEuOTYtMS45Ni0xLjk2cy0xLjk2Ljg4LTEuOTYsMS45Ni44OCwxLjk2LDEuOTYsMS45NmMuMjgsMCwuNTUtLjA2Ljc5LS4xN2wyLjc4LDIuNzh2My40Yy00LjI0LS4zMi03LjM2LTMuNDQtNy4zNi03LjUyLDAtMy41NSwyLjI5LTcuMDksNC4yMS05LjQzLDEuNTUtMS44OSwzLjExLTMuMzIsMy44Ni0zLjk3Ljc0LjY1LDIuMzEsMi4wOCwzLjg2LDMuOTcsMS45MiwyLjM0LDQuMjEsNS44OCw0LjIxLDkuNDMsMCw0LjA4LTMuMTIsNy4yMS03LjM2LDcuNTJaTTEzLjI0LDE0LjhjMC0uMy4yNC0uNTQuNTQtLjU0cy41NC4yNC41NC41NC0uMjQuNTQtLjU0LjU0LS41NC0uMjQtLjU0LS41NFpNNS43NSwxNC44YzAsLjMtLjI0LjU0LS41NC41NHMtLjU0LS4yNC0uNTQtLjU0LjI0LS41NC41NC0uNTQuNTQuMjQuNTQuNTRaIi8+CiAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI5LjE5LDEwLjk0Yy0xLjMzLDAtMi40My40NS0zLjMxLDEuMzUtLjg4LjktMS4zMiwyLjA0LTEuMzIsMy40cy40NCwyLjQ0LDEuMzIsMy4zMywyLjAzLDEuMzMsMy40MywxLjMzYy45LDAsMS42OS0uMTYsMi4zNC0uNDguNjYtLjMyLDEuMjItLjgyLDEuNjktMS40OGwtMS44OS0uODljLS42LjU5LTEuMzIuODgtMi4xNi44OC0uNywwLTEuMjgtLjE5LTEuNzMtLjU2LS40NS0uMzgtLjczLS44OC0uODMtMS41Mmg3LjIxdi0uNDNjMC0xLjQ4LS40My0yLjY3LTEuMzItMy41Ny0uODgtLjktMi4wMy0xLjM1LTMuNDQtMS4zNVpNMjYuODMsMTQuNTJjLjI1LS41NS41My0uOTQuODItMS4xNi40Ny0uMzUsMS4wMi0uNTMsMS42NS0uNTMuNTgsMCwxLjA4LjE2LDEuNTIuNDdzLjczLjcyLjg4LDEuMjJoLTQuODdaIi8+CiAgICAgIDxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMzYuMDgiIHk9IjE0LjYxIiB3aWR0aD0iNC4xOCIgaGVpZ2h0PSIyLjA5Ii8+CiAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQ4Ljg5LDkuOTRjMS4zNywwLDIuNi41OCwzLjcsMS43NGwxLjYxLTEuNTRjLS42Ny0uNzgtMS40Ni0xLjM4LTIuMzktMS44LS45Mi0uNDItMS44OC0uNjMtMi44OC0uNjMtMS4xNywwLTIuMjcuMjktMy4yOS44Ni0xLjAyLjU3LTEuOCwxLjMyLTIuMzQsMi4yNi0uNTUuOTQtLjgyLDIuMDEtLjgyLDMuMjIsMCwxLjg2LjYsMy4zOSwxLjgsNC41OCwxLjIsMS4xOSwyLjc0LDEuNzksNC42MiwxLjc5LDEuMDIsMCwxLjkzLS4xNywyLjcyLS41MS43OS0uMzQsMS42NC0uOTQsMi41My0xLjgxbC0xLjU2LTEuNjNjLS42Ni42Ni0xLjI3LDEuMTEtMS44MiwxLjM2LS41NS4yNS0xLjE2LjM3LTEuODMuMzctLjc4LDAtMS41LS4xOC0yLjE0LS41M3MtMS4xNC0uODUtMS40OS0xLjQ3Yy0uMzUtLjYzLS41My0xLjM0LS41My0yLjE1LDAtMS4xNi40LTIuMTMsMS4xOS0yLjkyLjc5LS43OSwxLjc3LTEuMTksMi45Mi0xLjE5WiIvPgogICAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02MS45Myw3LjcxYy0xLjEzLDAtMi4xOC4yOC0zLjE2Ljg1cy0xLjc1LDEuMzQtMi4zMSwyLjMxYy0uNTYuOTctLjg0LDIuMDMtLjg0LDMuMTksMCwxLjczLjYsMy4yMiwxLjgsNC40NywxLjIsMS4yNiwyLjcxLDEuODgsNC41MywxLjg4czMuMjEtLjYxLDQuNDItMS44M2MxLjIyLTEuMjIsMS44Mi0yLjcyLDEuODItNC40OHMtLjYyLTMuMjktMS44NS00LjUzYy0xLjIzLTEuMjQtMi43LTEuODYtNC40MS0xLjg2Wk02NC43MywxNy4wMWMtLjc3Ljc5LTEuNywxLjE4LTIuNzksMS4xOC0uOTcsMC0xLjgyLS4zLTIuNTctLjkxLS45Ni0uNzgtMS40NC0xLjg0LTEuNDQtMy4xNywwLTEuMi4zOC0yLjE5LDEuMTQtMi45Ny43Ni0uNzgsMS43LTEuMTcsMi44Mi0xLjE3czIuMDUuNCwyLjgyLDEuMiwxLjE2LDEuNzcsMS4xNiwyLjkyLS4zOCwyLjEzLTEuMTUsMi45MloiLz4KICAgICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNODAuNDgsOS41N2MtMS4yMy0xLjI0LTIuNy0xLjg2LTQuNDEtMS44Ni0xLjEzLDAtMi4xOC4yOC0zLjE2Ljg1cy0xLjc1LDEuMzQtMi4zMSwyLjMxYy0uNTYuOTctLjg0LDIuMDMtLjg0LDMuMTksMCwxLjczLjYsMy4yMiwxLjgsNC40NywxLjIsMS4yNiwyLjcxLDEuODgsNC41MywxLjg4czMuMjEtLjYxLDQuNDItMS44M2MxLjIyLTEuMjIsMS44Mi0yLjcyLDEuODItNC40OHMtLjYyLTMuMjktMS44NS00LjUzWk03OC44OCwxNy4wMWMtLjc3Ljc5LTEuNywxLjE4LTIuNzksMS4xOC0uOTcsMC0xLjgyLS4zLTIuNTctLjkxLS45Ni0uNzgtMS40NC0xLjg0LTEuNDQtMy4xNywwLTEuMi4zOC0yLjE5LDEuMTQtMi45Ny43Ni0uNzgsMS43LTEuMTcsMi44Mi0xLjE3czIuMDUuNCwyLjgyLDEuMiwxLjE2LDEuNzcsMS4xNiwyLjkyLS4zOCwyLjEzLTEuMTUsMi45MloiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPg==";

    const cssFilePath = path.join(
      process.cwd(),
      "public/styles/deliveries-list-pdf.css"
    );

    let css: string;

    try {
      css = await fs.promises.readFile(cssFilePath, "utf-8");
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to read CSS file" },
        { status: 500 }
      );
    }

    const htmlContent = `
        <html>
            <head>
                <title>Delivery List</title>
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
                <style>
                 
                </style>
            </head>
            <body>
                ${Object.entries(groupedByBairro)
                  .map(
                    ([bairro, bags]) => `
                <div class="section">
                    <div class="bairro-title"style="page-break-inside: avoid;">
                        <h3>${bairro}</h3>
                    </div>
                    ${bags
                      .map(
                        (bag) => `
                    <div class="delivery-bag" style="page-break-inside: avoid;">
                        <div class="bag-header">
                            <h4>${bag.endereco} - ${bag.bairro}</h4>
                            <p>CEP: ${bag.cep}</p>
                        </div>
                        <div class="bag-content" style="page-break-inside: avoid;">
                            <div class="bag-info bag-info--pedido">
                                <h5>Pedido:</h5>
                                <p>${bag.id_do_pedido}</p>
                            </div>
                            <div class="bag-info bag-info--cliente">
                                <h5>Cliente:</h5>
                                <p>${bag.nome_do_cliente}</p>
                            </div>
                            <div class="bag-info bag-info--conteudo">
                                <h5>Conteúdo:</h5>
                                <p>${bag.conteudo.join(", ")}</p>
                            </div>
                            <div class="bag-info bag-info--pagamento">
                                <h5>Pagamento:</h5>
                                <p>${bag.forma_de_pagamento}</p>
                            </div>
                            <div class="bag-info bag-info--cobrar">
                                <h5>Cobrar:</h5>
                                <p>
                                    ${
                                      typeof bag.valor_a_cobrar === "number"
                                        ? `R$ ${bag.valor_a_cobrar.toFixed(2)}`
                                        : bag.valor_a_cobrar
                                    }
                                </p>
                            </div>
                        </div>
                    </div>`
                      )
                      .join("")} 
                </div>`
                  )
                  .join("")}
            </body>
        </html>`;

    await page.setContent(htmlContent, {
      waitUntil: "networkidle0",
    });

    await page.evaluateHandle("document.fonts.ready");

    const pdfBuffer = await page.pdf({
      format: "a4",
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: `
        <style>
            :root {
                --black: #1D1D1D;
                --dark-green: #222629;
                --gray: #ced0cf;
                --white: #E5E5E5;
            }

            .header {
                font-weight: bold;
                text-align: center;    
                border: 1.8px solid var(--black);
                border-radius: 3.7mm;
                padding-left: 30px;
                height: 1.8cm;
                width: 100%;
                margin-inline: 26px;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                color: var(--dark-green);
            }
  
            .header h2 {
                text-transform: uppercase;
                font-size: 18pt;
                font-weight: 600;
                text-height: 1.2cm;
                padding-left: 10px;
            }
    
            .header p {
                padding-left: 140px;
                font-size: 8pt;
                font-weight: 400;
                margin: 0;
                justify-self: flex-end;
            }

            .logo {
                width: 110px;
                padding-right: 90px;
            }

            .header p {
                font-size: 8pt;
                margin: 0;
            }
        </style>
        <div class="header" style="font-family: 'Poppins';">
            <img src="data:image/svg+xml;base64,${logoBase64}" class="logo" />
            <h2>Lista de Entregas</h2>
            <p>Página <span class="pageNumber"></span> de <span class="totalPages"></span></p>
        </div>`,
    });

    // await browser.close();

    return NextResponse.json(pdfBuffer, {
      status: 200,
      headers: { "Content-Type": "application/pdf" },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}
