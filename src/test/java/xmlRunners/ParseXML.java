package xmlRunners;

import org.junit.Test;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import java.io.File;
import java.time.LocalDateTime;

public class ParseXML {

    public static void main(String args[]) {
        ParseXML xml = new ParseXML();
        xml.parseXMLDocument("asdf");
    }


    public Document parseXMLDocument(String filePath) {
        try {
            File inputFile = new File("src/test/java/xmlRunners/cars.xml");
            DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
            Document doc = dBuilder.parse(inputFile);

            return doc;

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;

    }

    @Test
    public void generateNewPaymentXML(){



            Document doc = parseXMLDocument("src/test/java/xmlRunners/cars.xml");
            doc.getDocumentElement().normalize();
            NodeList nList = doc.getElementsByTagName("MsgId");
            String oldTextValue = ((Element)nList.item(0)).getTextContent();
            String num = oldTextValue.replaceAll("([^0-9])", "");
            long id = Long.parseLong(num.length()==0?"0":num); // grab the old number
            String replaceWith = oldTextValue.replaceAll("\\d+","") + (++id);
        System.out.println(oldTextValue);
        System.out.println(replaceWith);
            //increment by one and append
            ((Element) nList.item(0)).setTextContent(replaceWith);// set new text value

            doc.getElementsByTagName("CreDtTm")// generate new date each time
                    .item(0)
                    .setTextContent(
                            LocalDateTime
                                    .now()
                                    .withNano(0)
                                    .toString());
            TransformerFactory transformerFactory = TransformerFactory.newInstance();
            Transformer transformer = null ;
        try {
            transformer = transformerFactory.newTransformer();

            DOMSource source = new DOMSource(doc);
            StreamResult result = new StreamResult(new File("src/test/java/xmlRunners/cars.xml"));
            transformer.transform(source, result);
            StreamResult consoleResult = new StreamResult(System.out);
            transformer.transform(source, consoleResult);
        }catch(Exception e) {
            e.printStackTrace();
        }

    }
}

